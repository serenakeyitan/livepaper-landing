interface UseCase {
  icon: string;
  title: string;
  description: string;
}

interface Casestudies2Props {
  title?: string;
  useCases?: UseCase[];
}

const Casestudies2 = ({
  title = "适合每一种研究需求",
  useCases = [
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
  ],
}: Casestudies2Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-medium md:text-5xl">{title}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="text-4xl">{useCase.icon}</div>
              <h3 className="text-xl font-semibold">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Casestudies2 };
