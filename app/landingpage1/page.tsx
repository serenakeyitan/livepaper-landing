import { 
  BookOpen,
  Search,
  Calculator,
  Smartphone
} from "lucide-react";

import { Hero1 } from "@/components/hero1";
import { Feature43 } from "@/components/feature43";
import { Feature197 } from "@/components/feature197";
import { Compare7 } from "@/components/compare7";
import { Testimonial10 } from "@/components/testimonial10";
import { Casestudies2 } from "@/components/casestudies2";
import { Cta10 } from "@/components/cta10";
import { Faq1 } from "@/components/faq1";
import FooterSection from "@/components/footer";

export default function LandingPage1() {
  return (
    <main>
      <Hero1
        heading="让论文阅读不再是负担"
        subheading="多文档深度对话，精准解析每一个公式"
        description="Kael 是为研究者打造的 AI 论文助手。无论你在处理 5 篇还是 50 篇文献，都能获得精准、可靠的答案。从文献综述到公式推导，Kael 让你专注于真正的研究。"
        buttons={{
          primary: {
            text: "免费开始使用",
            url: "#",
          },
          secondary: {
            text: "观看演示视频（2分钟）",
            url: "#",
          },
        }}
        image={{
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          alt: "Kael AI 论文助手展示图",
        }}
      />
      
      <Feature43
        title="研究者的困境，我们都懂"
        columns={2}
        features={[
          {
            heading: "📚 文档太多，AI 却跟不上",
            description:
              "市面上的工具读完 3-5 篇论文就开始「胡言乱语」，质量急剧下降",
            icon: <BookOpen className="size-6" />,
          },
          {
            heading: "🔍 找不到真正重要的文献",
            description:
              "在海量论文中迷失方向，错过领域内的关键研究",
            icon: <Search className="size-6" />,
          },
          {
            heading: "📊 公式图表成了黑洞",
            description:
              "AI 看不懂复杂公式和数据表格，只能给你一堆模糊的解释",
            icon: <Calculator className="size-6" />,
          },
          {
            heading: "📱 在手机上根本没法读",
            description:
              "字太小、排版乱、体验差，通勤时间完全浪费",
            icon: <Smartphone className="size-6" />,
          },
        ]}
      />

      <Feature197
        title="Kael 的四大核心能力"
        features={[
          {
            id: 1,
            title: "📑 多文档深度理解",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
            description:
              "上传 50 篇论文？100 页综述？Kael 的多文档处理引擎让你可以自由导入任意数量的文献。我们专门优化的 AI 架构确保即使文档数量增加，问答质量依然精准可靠。不再需要拆分文献集，不再担心上下文丢失。",
            highlights: [
              "支持长篇幅文档（500+ 页）",
              "跨文档引用关联",
              "智能上下文管理",
            ],
          },
          {
            id: 2,
            title: "🧭 智能论文推荐系统",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
            description:
              "Kael 不仅帮你读懂现有文献，更能主动为你拓展知识边界。基于你的研究方向，智能推荐高质量相关论文，追溯学术源头，发现被引最多的关键文献。让文献综述从「大海捞针」变成「按图索骥」。",
            highlights: [
              "追溯引用链条",
              "筛选高影响力论文",
              "发现跨学科连接",
            ],
          },
          {
            id: 3,
            title: "🧮 公式与图表精准解析",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
            description:
              "别让复杂的数学公式和实验数据成为阅读障碍。Kael 能够精确识别并解析文档中的公式、图表和数据表格，理解它们的含义，并用清晰的语言为你解释。从推导过程到实验结果，每一个细节都透明可查。",
            highlights: [
              "LaTeX 公式识别",
              "图表数据提取",
              "逐步推导解释",
            ],
          },
          {
            id: 4,
            title: "📱💻🖥️ 全平台精美阅读体验",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
            description:
              "通勤路上、咖啡店里、深夜的书房——Kael 在手机、平板、电脑上都提供同样精美的阅读体验。自适应字体大小、智能排版优化、护眼模式，让你在任何设备上都能专注于内容本身。",
            highlights: [
              "响应式设计",
              "护眼模式",
              "云端同步",
            ],
          },
        ]}
      />

<Testimonial10
        title="被全球研究者信赖"
        stats={[
          { icon: "🎓", value: "10,000+ 研究者正在使用" },
          { icon: "📄", value: "500,000+ 篇论文已被解析" },
          { icon: "⭐", value: "4.8/5 用户评分" },
        ]}
        testimonials={[
          {
            quote:
              "终于可以同时处理整个文献集了。之前用过的工具处理 10 篇以上论文就开始出错。Kael 让我一次性导入 30 篇综述，质量完全没下降。这才是真正为研究者设计的工具。",
            author: {
              name: "Dr. Zhang Wei",
              role: "计算机科学博士生，清华大学",
            },
          },
          {
            quote:
              "公式解析太准确了。作为物理专业的学生，我需要理解大量复杂公式。Kael 不仅能识别，还能逐步解释推导过程。节省了我无数时间。",
            author: {
              name: "Sarah Chen",
              role: "物理学硕士，MIT",
            },
          },
        ]}
      />
      <Compare7
        title="Kael vs 其他 AI 论文工具"
        columns={["Kael", "ChatPDF", "Elicit", "其他工具"]}
        highlightedColumnIndex={0}
        rows={[
          {
            feature: "多文档处理质量",
            cells: [
              { icon: "✅", text: "优秀", iconColor: "green" },
              { icon: "⚠️", text: "3篇以上质量下降", iconColor: "yellow" },
              { icon: "⚠️", text: "有限支持", iconColor: "yellow" },
              { icon: "❌", text: "不支持", iconColor: "red" },
            ],
          },
          {
            feature: "公式图表解析",
            cells: [
              { icon: "✅", text: "精准识别", iconColor: "green" },
              { icon: "❌", text: "基础识别", iconColor: "red" },
              { icon: "❌", text: "基础识别", iconColor: "red" },
              { icon: "❌", text: "不支持", iconColor: "red" },
            ],
          },
          {
            feature: "论文推荐系统",
            cells: [
              { icon: "✅", text: "智能推荐", iconColor: "green" },
              { icon: "❌", text: "无", iconColor: "red" },
              { icon: "✅", text: "部分支持", iconColor: "green" },
              { icon: "❌", text: "无", iconColor: "red" },
            ],
          },
          {
            feature: "移动端体验",
            cells: [
              { icon: "✅", text: "完美适配", iconColor: "green" },
              { icon: "⚠️", text: "基础适配", iconColor: "yellow" },
              { icon: "⚠️", text: "基础适配", iconColor: "yellow" },
              { icon: "❌", text: "体验差", iconColor: "red" },
            ],
          },
          {
            feature: "跨文档引用",
            cells: [
              { icon: "✅", text: "支持", iconColor: "green" },
              { icon: "❌", text: "不支持", iconColor: "red" },
              { icon: "⚠️", text: "有限", iconColor: "yellow" },
              { icon: "❌", text: "不支持", iconColor: "red" },
            ],
          },
        ]}
      />


      <Casestudies2
        title="适合每一种研究需求"
        useCases={[
          {
            icon: "📚",
            title: "文献综述",
            description: "快速梳理领域发展脉络，找到关键研究",
          },
          {
            icon: "🔬",
            title: "实验设计",
            description: "对比不同方法论，理解实验细节",
          },
          {
            icon: "✍️",
            title: "论文写作",
            description: "精准引用，避免误读原文",
          },
          {
            icon: "🎓",
            title: "课程学习",
            description: "深入理解教材和补充阅读材料",
          },
        ]}
      />

     
      <Faq1
        heading="常见问题解答"
        items={[
          {
            id: "faq-1",
            question: "Kael 支持哪些语言的论文？",
            answer:
              "目前支持英文、中文、德文、法文、日文等 30+ 种语言的论文识别和对话。",
          },
          {
            id: "faq-2",
            question: "我的数据安全吗？",
            answer:
              "所有上传的文档采用端到端加密，仅你本人可以访问。我们不会将你的文档用于 AI 训练。",
          },
          {
            id: "faq-3",
            question: "和 ChatGPT 直接上传 PDF 有什么区别？",
            answer:
              "Kael 专为学术场景优化：更准确的公式识别、更好的长文档处理、专业的引用追踪，以及学术论文推荐系统。",
          },
          {
            id: "faq-4",
            question: "有免费试用吗？",
            answer:
              "是的！新用户可以免费上传 3 篇论文并进行 50 次对话，无需信用卡。",
          },
          {
            id: "faq-5",
            question: "支持团队协作吗？",
            answer:
              "支持！团队版提供共享文献库、协作注释、统一计费等功能。",
          },
        ]}
      />
       <Cta10
        heading="准备好提升你的研究效率了吗？"
        description="加入 10,000+ 研究者的行列，让 Kael 成为你的智能研究伙伴"
        buttons={{
          primary: {
            text: "免费开始使用 ➜",
            url: "#",
          },
        }}
        subtext="无需信用卡 · 3 分钟完成设置"
        trustLabels={[
          "30 天无理由退款",
          "数据完全加密",
          "随时取消订阅",
        ]}
      />
      <FooterSection />
    </main>
  );
}

