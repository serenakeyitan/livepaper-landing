import { Asterisk } from "lucide-react";
import React from "react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface Process1Props {
  title?: string;
  steps?: ProcessStep[];
}

const Process1 = ({
  title = "三步开启智能研究",
  steps = [
    {
      step: "1",
      title: "上传文献",
      description: "批量导入 PDF、拖拽上传或从云端同步",
    },
    {
      step: "2",
      title: "开始对话",
      description: "用自然语言提问，获得精准答案和引用来源",
    },
    {
      step: "3",
      title: "拓展阅读",
      description: "发现相关论文，构建完整的知识图谱",
    },
  ],
}: Process1Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <div className="relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl">
              <h1 className="w-fit">{title}</h1>
              <Asterisk className="absolute -right-2 -top-2 size-5 text-orange-500 md:size-10 lg:-right-14" />
            </div>
          </div>
          <ul className="lg:pl-22 relative col-span-4 w-full">
            {steps.map((stepItem, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-between gap-10 border-t py-8 md:flex-row lg:py-10"
              >
                <Illustration className="absolute right-0 top-4" />

                <div className="bg-muted flex size-12 items-center justify-center px-4 py-1 tracking-tighter">
                  {index < steps.length - 1 ? (
                    <span>{stepItem.step} →</span>
                  ) : (
                    <span>{stepItem.step}</span>
                  )}
                </div>
                <div className="">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl">
                    {stepItem.title}
                  </h3>
                  <p className="text-foreground/50">{stepItem.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Process1 };

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
    </svg>
  );
};
