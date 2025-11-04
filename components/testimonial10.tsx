import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Stat {
  icon: string;
  value: string;
}

interface Testimonial {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar?: {
      src: string;
      alt: string;
    };
  };
}

interface Testimonial10Props {
  title?: string;
  stats?: Stat[];
  testimonials?: Testimonial[];
}

const Testimonial10 = ({
  title = "被全球研究者信赖",
  stats = [
    { icon: "🎓", value: "10,000+ 研究者正在使用" },
    { icon: "📄", value: "500,000+ 篇论文已被解析" },
    { icon: "⭐", value: "4.8/5 用户评分" },
  ],
  testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
      author: {
        name: "Customer Name",
        role: "Role",
        avatar: {
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
          alt: "Customer Name",
        },
      },
    },
  ],
}: Testimonial10Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-12 text-4xl font-medium md:text-5xl">{title}</h2>
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className="text-muted-foreground text-sm md:text-base">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={`grid gap-12 ${testimonials.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              <p className="mb-6 flex-1 font-medium lg:text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2 md:gap-4">
                {testimonial.author.avatar ? (
                  <Avatar className="size-12 md:size-16">
                    <AvatarImage
                      src={testimonial.author.avatar.src}
                      alt={testimonial.author.avatar.alt}
                    />
                    <AvatarFallback>{testimonial.author.name}</AvatarFallback>
                  </Avatar>
                ) : (
                  <div className="bg-muted flex size-12 items-center justify-center rounded-full md:size-16">
                    <span className="text-muted-foreground text-xl">
                      {testimonial.author.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="text-left">
                  <p className="text-sm font-medium md:text-base">
                    {testimonial.author.name}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {testimonial.author.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonial10 };
