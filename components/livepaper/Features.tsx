"use client";

import { Check, BarChart3, Play, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { START_FOR_FREE_URL } from "./constants";
import { gtagSendEvent } from "./gtag-utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";

const Features = () => {
  const [feature1Ref, feature1Visible] = useScrollAnimation();
  const [feature2Ref, feature2Visible] = useScrollAnimation();
  const [feature3Ref, feature3Visible] = useScrollAnimation();
  const [feature4Ref, feature4Visible] = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<'overview' | 'seo' | 'social'>('overview');

  // Boids simulation state
  const [boidCount, setBoidCount] = useState(50);
  const [separationDistance, setSeparationDistance] = useState(30);
  const [alignmentDistance, setAlignmentDistance] = useState(50);
  const [cohesionDistance, setCohesionDistance] = useState(70);
  const boidsRef = useRef<Array<{ x: number; y: number; vx: number; vy: number }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Initialize boids
  useEffect(() => {
    boidsRef.current = Array.from({ length: boidCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
  }, [boidCount]);

  // Set video playback speed to 1.25x
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25;
    }
  }, []);

  // Animate boids with actual boids algorithm using Canvas for smoother animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const animate = () => {
      // Update boid positions
      boidsRef.current = boidsRef.current.map((boid, index) => {
        let newVx = boid.vx;
        let newVy = boid.vy;

        // Separation - avoid crowding neighbors
        let separationX = 0;
        let separationY = 0;
        let separationCount = 0;

        // Alignment - steer towards average heading of neighbors
        let alignmentX = 0;
        let alignmentY = 0;
        let alignmentCount = 0;

        // Cohesion - steer towards average position of neighbors
        let cohesionX = 0;
        let cohesionY = 0;
        let cohesionCount = 0;

        boidsRef.current.forEach((other, otherIndex) => {
          if (index === otherIndex) return;

          const dx = boid.x - other.x;
          const dy = boid.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Separation - push away from nearby boids
          if (distance < separationDistance && distance > 0) {
            separationX += dx / distance;
            separationY += dy / distance;
            separationCount++;
          }

          // Alignment - match velocity of nearby boids
          if (distance < alignmentDistance) {
            alignmentX += other.vx;
            alignmentY += other.vy;
            alignmentCount++;
          }

          // Cohesion - move towards center of nearby boids
          if (distance < cohesionDistance) {
            cohesionX += other.x;
            cohesionY += other.y;
            cohesionCount++;
          }
        });

        // Apply separation force
        if (separationCount > 0) {
          separationX /= separationCount;
          separationY /= separationCount;
          newVx += separationX * 0.05;
          newVy += separationY * 0.05;
        }

        // Apply alignment force
        if (alignmentCount > 0) {
          alignmentX /= alignmentCount;
          alignmentY /= alignmentCount;
          newVx += (alignmentX - boid.vx) * 0.05;
          newVy += (alignmentY - boid.vy) * 0.05;
        }

        // Apply cohesion force
        if (cohesionCount > 0) {
          cohesionX /= cohesionCount;
          cohesionY /= cohesionCount;
          newVx += (cohesionX - boid.x) * 0.001;
          newVy += (cohesionY - boid.y) * 0.001;
        }

        // Limit speed
        const speed = Math.sqrt(newVx * newVx + newVy * newVy);
        const maxSpeed = 0.8;
        if (speed > maxSpeed) {
          newVx = (newVx / speed) * maxSpeed;
          newVy = (newVy / speed) * maxSpeed;
        }

        // Update position
        let newX = boid.x + newVx;
        let newY = boid.y + newVy;

        // Wrap around edges
        if (newX < 0) newX = 100;
        if (newX > 100) newX = 0;
        if (newY < 0) newY = 100;
        if (newY > 100) newY = 0;

        return { x: newX, y: newY, vx: newVx, vy: newVy };
      });

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw all boids with velocity trails
      boidsRef.current.forEach((boid, i) => {
        const x = (boid.x / 100) * canvas.width;
        const y = (boid.y / 100) * canvas.height;
        const color = i === 0 ? '#f97316' : '#000000';

        // Calculate trail end point based on velocity
        const trailLength = 15;
        const speed = Math.sqrt(boid.vx * boid.vx + boid.vy * boid.vy);
        const normalizedVx = speed > 0 ? boid.vx / speed : 0;
        const normalizedVy = speed > 0 ? boid.vy / speed : 0;

        // Draw trail line
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(
          x - normalizedVx * trailLength,
          y - normalizedVy * trailLength
        );
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Draw boid dot
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [separationDistance, alignmentDistance, cohesionDistance]);
  
  return (
    <section id="features" className="w-full py-12 sm:py-16 lg:py-24 bg-neutral-800">
      <div className="container mx-auto px-10 sm:px-12 lg:px-16">
        {/* Feature 1 — Dynamic Paper Page */}
        <div ref={feature1Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-24 lg:mb-40 max-w-[1800px] mx-auto ${feature1Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-primary">Dynamic</span> Paper Page
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-semibold">
                A modern page built for dynamic research
              </p>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-semibold">
              LivePaper creates a paper layout designed for <strong className="text-white">interactive content</strong>. <strong className="text-white">Charts, animations, and video</strong> blend naturally into a <strong className="text-white">clean, structured reading experience</strong> across any device.
            </p>
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-3">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Charts, animations, and video integrated</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Works on desktop/tablet/phone</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Clear structure & navigation</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">No plugins required</span>
              </div>
            </div>
            <Button
              variant="default"
              size="lg"
              className="mt-8 bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-8 py-6 h-auto rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                gtagSendEvent(START_FOR_FREE_URL);
              }}
            >
              Get 1 Month Pro Plan for Free
            </Button>
          </div>
          <div className="lg:pl-8 animate-fade-in-right animation-delay-200">
            <div className="w-full max-w-[640px] h-[420px] mx-auto rounded-xl bg-white shadow-2xl overflow-hidden">
              {/* Paper Content - Single column clean layout */}
              <div className="p-4 sm:p-6 bg-white h-full flex flex-col">
                {/* Paper Title */}
                <h4 className="text-base sm:text-lg font-bold text-black mb-1">Neural Network Architecture</h4>
                <p className="text-[10px] sm:text-xs text-neutral-500 mb-2 sm:mb-3">Section 3 • Methodology</p>

                {/* Paragraph */}
                <p className="text-xs sm:text-sm text-black leading-relaxed mb-3 sm:mb-4">
                  Our model employs a transformer-based architecture with multi-head attention mechanisms. The embedding layer processes input sequences...
                </p>

                {/* Media Placeholders Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 flex-1">
                  {/* Interactive Chart */}
                  <div className="border-2 border-black rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center bg-white">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-black/5 flex items-center justify-center mb-1.5 sm:mb-2">
                      <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-neutral-600 text-center">Interactive Chart</p>
                  </div>

                  {/* Video */}
                  <div className="border-2 border-black rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center bg-white">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-black/5 flex items-center justify-center mb-1.5 sm:mb-2">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-neutral-600 text-center">Video Content</p>
                  </div>

                  {/* Diagram */}
                  <div className="border-2 border-black rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center bg-white">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-black/5 flex items-center justify-center mb-1.5 sm:mb-2">
                      <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-neutral-600 text-center">Diagram</p>
                  </div>

                  {/* Table */}
                  <div className="border-2 border-black rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center bg-white">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-black/5 flex items-center justify-center mb-1.5 sm:mb-2">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                        <line x1="3" y1="9" x2="21" y2="9" strokeWidth="2"/>
                        <line x1="3" y1="15" x2="21" y2="15" strokeWidth="2"/>
                        <line x1="9" y1="3" x2="9" y2="21" strokeWidth="2"/>
                        <line x1="15" y1="3" x2="15" y2="21" strokeWidth="2"/>
                      </svg>
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-neutral-600 text-center">Data Table</p>
                  </div>
                </div>

                {/* Reference text */}
                <p className="text-[8px] sm:text-[9px] text-neutral-400 mt-2 sm:mt-3 italic">
                  In "How Much Hotter Is Your Hometown Than When You Were Born?" [111], readers interact with visualizations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 — Interactive Data Visualization */}
        <div ref={feature2Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-24 lg:mb-40 max-w-[1800px] mx-auto ${feature2Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <div className="lg:pr-8 order-2 lg:order-1">
            <div className="w-full max-w-[640px] h-[420px] mx-auto rounded-xl bg-black shadow-2xl overflow-hidden">
              {/* Video */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/livepaper/data-viz-demo.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 animate-fade-in-up">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-primary">Interactive</span> Data Visualization
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-semibold">
                Turn static figures into explorable data
              </p>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-semibold">
              LivePaper <strong className="text-white">reconstructs</strong> your charts so readers can <strong className="text-white">inspect values</strong>, <strong className="text-white">zoom into details</strong>, switch conditions, compare views, and <strong className="text-white">export data</strong> for deeper understanding.
            </p>
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-3">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Hover for exact values</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Condition & legend switching</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Zoom, compare, export</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Multi-view displays (e.g., train/val)</span>
                    </div>
                    </div>
            <Button
              variant="default"
              size="lg"
              className="mt-8 bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-8 py-6 h-auto rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                gtagSendEvent(START_FOR_FREE_URL);
              }}
            >
              Get 1 Month Pro Plan for Free
            </Button>
                  </div>
                </div>

        {/* Feature 3 — Animated Concepts */}
        <div ref={feature3Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-24 lg:mb-40 max-w-[1800px] mx-auto ${feature3Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-primary">Animated</span> Concepts
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-semibold">
                Turn complex ideas into clear visual explanations
              </p>
                </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-semibold">
              Model architectures, algorithm flows, time dynamics, and causal relationships become <strong className="text-white">animated visual explanations</strong>—making difficult concepts <strong className="text-white">intuitive</strong> and easy to follow.
            </p>
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-3">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Algorithm flow animations</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Model structure motion</span>
                    </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Time-series visualizations</span>
                </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Causal/relationship diagrams</span>
                        </div>
                      </div>
            <Button
              variant="default"
              size="lg"
              className="mt-8 bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-8 py-6 h-auto rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                gtagSendEvent(START_FOR_FREE_URL);
              }}
            >
              Get 1 Month Pro Plan for Free
            </Button>
                    </div>
          <div className="lg:pl-8 animate-fade-in-right animation-delay-200">
            <div className="w-full max-w-[640px] h-[420px] mx-auto rounded-xl bg-white shadow-2xl overflow-hidden">
              <div className="p-4 bg-white h-full flex flex-col">
                {/* Title */}
                <h4 className="text-base font-bold text-black mb-1">Interact with live simulations—no setup required.</h4>
                <p className="text-[11px] text-neutral-600 mb-2">
                  This Boids visualization models the movement of a flock of birds, and exposes parameters that a reader can manipulate to change the behavior of the simulation.
                </p>

                {/* Boid Count Slider */}
                <div className="mb-2">
                  <label className="text-[10px] font-semibold text-neutral-700 block mb-1">BOID COUNT</label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={boidCount}
                    onChange={(e) => setBoidCount(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Simulation Canvas */}
                <div className="flex-1 border-2 border-neutral-200 rounded-lg bg-neutral-50 relative overflow-hidden mb-2">
                  <canvas
                    ref={canvasRef}
                    width={600}
                    height={250}
                    className="w-full h-full"
                  />
                </div>

                {/* Parameter Sliders Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[9px] font-semibold text-neutral-600 block mb-1">SEPARATION DISTANCE</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={separationDistance}
                      onChange={(e) => setSeparationDistance(Number(e.target.value))}
                      className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-semibold text-neutral-600 block mb-1">ALIGNMENT DISTANCE</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={alignmentDistance}
                      onChange={(e) => setAlignmentDistance(Number(e.target.value))}
                      className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-semibold text-neutral-600 block mb-1">COHESION DISTANCE</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={cohesionDistance}
                      onChange={(e) => setCohesionDistance(Number(e.target.value))}
                      className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
                    </div>

        {/* Feature 4 — Visibility & Sharing */}
        <div ref={feature4Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center max-w-[1800px] mx-auto ${feature4Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <div className="lg:pr-8 order-2 lg:order-1">
            <div className="w-full max-w-[640px] h-[420px] mx-auto rounded-2xl bg-white shadow-2xl overflow-hidden">
              <div className="p-4 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-black">Analytics Dashboard</h3>
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>

                {/* Tabs */}
                <div className="flex gap-1.5 mb-3">
                  {(['overview', 'seo', 'social'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        activeTab === tab
                          ? 'bg-neutral-800 text-white'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      {tab === 'overview' ? 'Overview' : tab === 'seo' ? 'SEO' : 'Social'}
                    </button>
                  ))}
                </div>

                <div className="border-t border-neutral-200 pt-3 flex-1 overflow-hidden">
                  {/* Overview Tab */}
                  {activeTab === 'overview' && (
                    <div className="h-full flex flex-col gap-2.5">
                      {/* Key Stats Cards */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 rounded-xl p-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-[10px] font-medium text-green-700 uppercase tracking-wide">Total Views</div>
                            <div className="w-6 h-6 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                          </div>
                          <div className="text-3xl font-black text-green-900 mb-1.5">12.4K</div>
                          <div className="flex items-center gap-1 text-[10px] font-medium text-green-600">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>+23% this month</span>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 rounded-xl p-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-[10px] font-medium text-blue-700 uppercase tracking-wide">Citations</div>
                            <div className="w-6 h-6 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                              </svg>
                            </div>
                          </div>
                          <div className="text-3xl font-black text-blue-900 mb-1.5">47</div>
                          <div className="flex items-center gap-1 text-[10px] font-medium text-blue-600">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>+12% this month</span>
                          </div>
                        </div>
                      </div>

                      {/* Traffic Sources */}
                      <div className="bg-white border border-neutral-200 rounded-xl p-3 flex-1 flex flex-col">
                        <div className="text-sm font-semibold text-black mb-3">Traffic Sources</div>
                        <div className="space-y-3 flex-1 flex flex-col justify-center">
                          <div>
                            <div className="flex justify-between text-sm mb-1.5">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                                <span className="font-medium text-neutral-700">Google Scholar</span>
                              </div>
                              <span className="font-bold text-black">42%</span>
                            </div>
                            <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500" style={{ width: '42%' }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1.5">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                                <span className="font-medium text-neutral-700">Social Media</span>
                              </div>
                              <span className="font-bold text-black">28%</span>
                            </div>
                            <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-500" style={{ width: '28%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SEO Tab */}
                  {activeTab === 'seo' && (
                    <div className="h-full flex flex-col gap-2.5">
                      {/* SEO Score - Hero Section */}
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-3 border border-blue-200/50">
                        <div className="flex items-center gap-2 mb-2.5">
                          <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-medium text-blue-600 uppercase tracking-wide">SEO Score</div>
                            <div className="text-[9px] text-blue-500/70">Search Engine Optimization</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-4xl font-black text-blue-600">94<span className="text-xl text-blue-400 font-bold">/100</span></div>
                          <div className="text-right">
                            <div className="text-xs text-blue-600 font-medium">Excellent</div>
                            <div className="text-[9px] text-blue-500/70">Top 5% of sites</div>
                          </div>
                        </div>
                      </div>

                      {/* Key Metrics Grid */}
                      <div className="grid grid-cols-4 gap-2">
                        <div className="bg-white rounded-lg p-2 border border-neutral-200">
                          <div className="text-[9px] text-neutral-500 font-medium mb-0.5">Monthly</div>
                          <div className="text-sm font-bold text-black">12.4K</div>
                        </div>
                        <div className="bg-white rounded-lg p-2 border border-neutral-200">
                          <div className="text-[9px] text-neutral-500 font-medium mb-0.5">Bounce</div>
                          <div className="text-sm font-bold text-black">31.2%</div>
                        </div>
                        <div className="bg-white rounded-lg p-2 border border-neutral-200">
                          <div className="text-[9px] text-neutral-500 font-medium mb-0.5">Pages</div>
                          <div className="text-sm font-bold text-black">3.84</div>
                        </div>
                        <div className="bg-white rounded-lg p-2 border border-neutral-200">
                          <div className="text-[9px] text-neutral-500 font-medium mb-0.5">Duration</div>
                          <div className="text-sm font-bold text-black">06:25</div>
                        </div>
                      </div>

                      {/* Charts Section */}
                      <div className="grid grid-cols-2 gap-2.5 flex-1 min-h-0">
                        <div className="bg-white rounded-xl p-2.5 border border-neutral-200 flex flex-col">
                          <div className="text-xs font-semibold text-black mb-1.5">Growth Trend</div>
                          <svg viewBox="0 0 100 30" className="w-full h-8 flex-shrink-0">
                            <polyline points="0,25 33,17 66,8 100,2" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
                            <circle cx="0" cy="25" r="2.5" fill="#3b82f6" />
                            <circle cx="33" cy="17" r="2.5" fill="#3b82f6" />
                            <circle cx="66" cy="8" r="2.5" fill="#3b82f6" />
                            <circle cx="100" cy="2" r="2.5" fill="#3b82f6" />
                          </svg>
                          <div className="flex justify-between text-[9px] text-neutral-500 font-medium mt-1.5">
                            <span>Aug<br/>5.2K</span>
                            <span>Sep<br/>12.4K</span>
                            <span>Oct<br/>18.7K</span>
                          </div>
                        </div>

                        <div className="bg-white rounded-xl p-2.5 border border-neutral-200 flex flex-col">
                          <div className="text-xs font-semibold text-black mb-1.5">Traffic Mix</div>
                          <div className="space-y-1.5 text-[10px] flex-1 flex flex-col justify-center">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                                <span className="font-medium text-neutral-700">Direct</span>
                              </div>
                              <span className="font-bold text-black">76.80%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                                <span className="font-medium text-neutral-700">Search</span>
                              </div>
                              <span className="font-bold text-black">18.26%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                                <span className="font-medium text-neutral-700">Referrals</span>
                              </div>
                              <span className="font-bold text-black">4.29%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                                <span className="font-medium text-neutral-700">Social</span>
                              </div>
                              <span className="font-bold text-black">0.32%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Social Tab */}
                  {activeTab === 'social' && (
                    <div className="h-full">
                      <div className="border border-neutral-200 rounded-xl p-4">
                        <div className="text-sm font-semibold text-black mb-3">Social Preview</div>
                        <div className="border border-neutral-100 rounded-lg p-3 bg-neutral-50">
                          <div className="text-2xl font-bold text-black mb-2">Transformer</div>
                          <div className="text-lg font-semibold text-black mb-2">Attention Is All You Need</div>
                          <div className="text-xs text-neutral-600 mb-3">Auto-generated preview card</div>
                          <div className="flex gap-4 text-xs text-neutral-500">
                            <div className="flex items-center gap-1">
                              <span>🔗</span> 128 shares
                            </div>
                            <div className="flex items-center gap-1">
                              <span>👁</span> 2.1K views
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 animate-fade-in-up">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-primary">Visibility</span> & <span className="text-primary">Sharing</span>
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-semibold">
                Make your research easier to discover
              </p>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-semibold">
              Dynamic content is easier to share and reference. LivePaper boosts <strong className="text-white">search visibility</strong> and provides <strong className="text-white">reader analytics</strong> to help your work reach a <strong className="text-white">wider audience</strong>.
            </p>
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-3">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Shareable animated figures</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Social-friendly previews</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">SEO-optimized structure</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Reader & audience stats</span>
              </div>
            </div>
            <Button
              variant="default"
              size="lg"
              className="mt-8 bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-8 py-6 h-auto rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                gtagSendEvent(START_FOR_FREE_URL);
              }}
            >
              Get 1 Month Pro Plan for Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
