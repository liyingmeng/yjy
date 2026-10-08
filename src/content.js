import {
  AudioLines,
  BrainCircuit,
  ChartNoAxesCombined,
  Clapperboard,
  DatabaseZap,
  ScanSearch,
  Waves,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "李莹蒙",
  nameEn: "Yingmeng Li",
  role: "AI 应用开发 / 多模态评测 / Agent & RAG",
  intro:
    "中国传媒大学信息与通信工程硕士，聚焦多模态视频理解与 AI 应用开发。曾在 TeleAI、中国信通院与 MiniMax 参与视觉大模型训练评测、数据闭环、多模态检索和 Agent 工作流验证。",
  email: "liyingmengwork@163.com",
  phone: "16630692478",
  resume: "/yjy/assets/li-yingmeng-resume.pdf",
};

export const media = {
  heroVideo: "",
  heroPoster: "",
};

export const metrics = [
  { value: "93.79%", label: "SAM3 平均 F1" },
  { value: "+6.55pp", label: "较内部基线提升" },
  { value: "3", label: "企业 AI 实习" },
  { value: "2", label: "公开研究论文" },
];

export const experiences = [
  {
    period: "2025.11 - 2026.05",
    company: "中国电信 TeleAI",
    team: "视觉理解研究中心",
    role: "视觉算法实习生",
    summary: "参与视觉大模型训评、数据闭环与多任务架构探索。",
  },
  {
    period: "2025.07 - 2025.10",
    company: "中国信息通信研究院",
    team: "人工智能研究所",
    role: "AI Agent 开发实习生",
    summary: "参与 Agent 工作流、多模态 RAG 检索评测与 Badcase 定位。",
  },
  {
    period: "2024.12 - 2025.03",
    company: "MiniMax",
    team: "内容安全算法团队",
    role: "大模型评测算法实习生",
    summary: "参与多模态场景识别、专业长文档 RAG 评测及数据标注闭环建设。",
  },
];

export const projects = [
  {
    index: "01",
    slug: "sam3-visual-evaluation",
    title: "SAM3 视觉大模型训练评测与数据闭环系统",
    projectName: "SAM3 视觉大模型训练评测与数据闭环系统",
    detailLayout: "internship-case-study",
    category: "视觉大模型 · 训练评测 · 数据闭环",
    period: "TeleAI · 2025.11—2026.05",
    description:
      "面向电信多业务新增类别，建立数据、掩码、训练、评测闭环，并参与 LoRA 专家与共享视觉主干方案验证。",
    result: "平均 F1 由 87.24% 提升至 93.79%，提升 6.55 个百分点。",
    tags: ["SAM3", "Data Loop", "LoRA Experts", "Badcase"],
    image: "/yjy/assets/projects/sam3-before-after.png",
    cardImage: "/yjy/assets/projects/sam3-teleai-cover.jpg",
    cardImageFit: "cover",
    cardImagePosition: "center",
    imagePosition: "center",
    Icon: ScanSearch,
    accent: "cyan",
    lead:
      "从业务新增类别出发，用数据、训练、评测与专家路由实验，验证可持续学习的视觉基座方案。",
    internship: {
      company: "中国电信 TeleAI",
      role: "视觉算法实习生",
      period: "2025.11 - 2026.05",
    },
    background:
      "电信多业务场景会持续出现新的细粒度目标、行为和复杂语义类别。这些类别通常样本少，目标尺度、形态和背景差异大；若为每个类别独立标注、训练和维护模型，适配周期与维护成本会持续增加。因此，团队希望利用 SAM3 的开放词汇检测与分割能力，构建兼具通用感知与持续学习能力的视觉基座。",
    techStack: [
      "SAM3",
      "Python",
      "PyTorch",
      "开放词汇检测",
      "实例分割",
      "Box Prompt",
      "自动标注",
      "SACO / COCO 数据格式",
      "LoRA",
      "Adapter",
      "全量微调",
      "冻结 Backbone",
      "P / R / F1",
      "IoU",
      "Conf 阈值分析",
      "Badcase 归因",
      "可视化质检",
    ],
    taskSummary: [
      "我主要负责业务专家模型的数据治理、训练与评测闭环，包括用 Box Prompt 生成掩码监督、训练稳定性定位、控制变量消融，以及 TP / FP / FN 样本级归因。",
      "同时，我与团队共同参与 LoRA 注入位置消融、模型融合、专家路由和共享 Vision Backbone 推理方案验证，为持续新增类别探索兼顾精度与维护成本的模型组织方式。",
    ],
    keyQuestions: [
      "哪些类别可以直接使用 SAM3 的零样本能力，哪些必须微调？",
      "指标提升来自数据、掩码监督还是可训练模块？",
      "新类别微调是否会破坏模型原有能力？",
      "父专家和 LoRA 子专家如何组合，才能兼顾效果与维护成本？",
    ],
    actionHeading: "具体行动",
    responsibilities: [
      {
        title: "建立数据与掩码闭环",
        detail:
          "统一多来源数据集的目录、类别和标注格式，将已有检测框作为 Box Prompt 生成初始分割掩码，并针对空 Mask、边缘锯齿、字段错误和坐标错位增加可视化质检。统一 Precision、Recall、F1 与阈值搜索口径，再按任务筛选 TP、FP、FN 回溯样本。零样本结果显示，SAM3 更适合外观明确的目标，例如火焰 F1 为 84.43%、鱼竿 F1 为 79.20%；行为类和复杂语义类别仍需要专项微调。",
      },
      {
        title: "通过控制变量定位训练问题",
        detail:
          "针对训练早期的 Loss NaN 与指标震荡，依次检查预训练权重、异常标注、模块学习率和梯度上限，并比较全量微调、LoRA、冻结 Vision Backbone、不同可训练层范围与掩码监督。修复掩码字段并引入辅助监督后，平均 F1 从 90.60% 提升至 93.79%；冻结 Backbone 后平均 F1 从 92.52% 降至 89.03%，说明当前业务分布仍需要视觉主干参与特征重适配。",
      },
      {
        title: "评估跨语言迁移中的遗忘",
        detail:
          "设计官方权重、中文训练、英文训练，以及英文模型继续中文训练四组实验。英文模型继续中文微调后，中文 F1 达到 91.45%，但英文 F1 降至 43.06%，表明单语言顺序微调存在明显灾难性遗忘。由此判断，中英文共存场景应采用联合采样、旧语言数据回放或语言专家隔离，而不是直接顺序微调。",
      },
      {
        title: "参与 13 组 LoRA 注入位置消融",
        detail:
          "通过 Only 实验评估单模块独立适配能力，通过 Minus 实验判断移除模块后的影响。TrE 视觉—文本融合层是高收益注入位置：仅训练 0.54M 参数、约占原模型 0.06%，即可达到 F1=93.37%；只调整 Scoring Head 或 Segmentation Head 的效果明显较弱。这说明新类别适配的关键更偏向视觉特征与文本提示的语义对齐，而非仅调整输出头。",
      },
      {
        title: "参与模型融合与专家路由验证",
        detail:
          "推理阶段共享 Vision Backbone，同一图像只编码一次，再根据 Prompt 或任务类型路由到父专家或 LoRA 子专家，并比较串行与并行推理。在 A800 上，5 个专家分别处理 20 个 Prompts、单帧共 100 个 Prompts 时，总耗时约 6 秒；但每增加一个全量父专家，显存仍增加约 3.3GB。阶段性方案因此收敛为“少量父专家承载领域能力 + LoRA 子专家适配高频新增类别”。",
      },
    ],
    resultHeading: "最终结果与业务价值",
    outcomes: [
      { value: "93.79%", label: "多任务平均 F1" },
      { value: "+6.55pp", label: "相较内部 baseline" },
      { value: "+3.19pp", label: "掩码辅助监督贡献" },
    ],
    achievements: [
      "多数据集混合训练平均 F1 达到 92.69%，与单数据集分别训练的 92.60% 基本持平，初步验证一个模型承载多个业务类别的可行性。",
      "形成从数据治理、Box Prompt 半自动标注、模型训练到评测与 Badcase 回流的复用闭环，减少新增类别重复准备数据和评测脚本的成本。",
      "通过 Backbone、跨语言和可视化一致性实验，识别性能下降、语言遗忘以及“指标上涨但预测框偏移”等风险，避免仅根据总体指标选型。",
      "LoRA 消融与共享 Backbone 路由实验为“少量父专家 + 轻量子专家”的持续学习方案提供了精度与资源依据，并沉淀出从业务目标出发逐层归因的方法。",
    ],
    gallery: [
      {
        src: "/yjy/assets/projects/sam3-evaluation-all35-vs-positive.png",
        alt: "SAM3 多数据集训练与正样本训练评测对比表",
        caption: "证据 01｜多数据集混合训练与仅正样本训练的 Precision、Recall、F1 对比。",
      },
      {
        src: "/yjy/assets/projects/sam3-lora-ablation-table.png",
        alt: "SAM3 LoRA 注入位置消融实验表",
        caption: "证据 02｜13 组 Only / Minus LoRA 注入位置消融及参数量、Precision、Recall 结果。",
      },
      {
        src: "/yjy/assets/projects/sam3-expert-routing-architecture.png",
        alt: "SAM3 共享视觉主干与专家路由架构",
        caption: "证据 03｜共享 Vision Backbone、父专家与 LoRA 子专家的分层路由方案。",
      },
      {
        src: "/yjy/assets/projects/sam3-application-scenarios.png",
        alt: "视觉算法业务场景与类别覆盖扩展记录",
        caption: "证据 04｜应用场景中的算法数量与类别覆盖扩展记录，展示持续新增业务类别的现实需求。",
      },
      {
        type: "video",
        src: "/yjy/assets/projects/sam3-application-scenarios.mp4",
        alt: "SAM3 相关视觉算法应用场景演示视频",
        caption: "证据 05｜应用场景演示视频（约 44 秒），用于补充展示视觉算法在真实场景中的输出效果。",
      },
    ],
  },
  {
    index: "02",
    slug: "caict-agent-rag",
    title: "内部知识办公 Agent 与多模态 RAG 评测系统",
    projectName: "内部知识办公 Agent 与多模态 RAG 评测系统",
    detailLayout: "internship-case-study",
    category: "AI Agent · RAG · Workflow Validation",
    period: "中国信息通信研究院 · 2025.07—2025.10",
    description:
      "围绕演讲稿、行业简报和论文检索等内部知识任务，验证从需求理解、知识检索到内容生成、结果校验与文档交付的端到端 Agent 工作流。",
    result: "完成多类内部知识效率 Agent 的端到端 PoC 验证，并沉淀平台选型、评测指标与 Badcase 归因方法。",
    tags: ["Dify / Coze", "LangChain", "Multimodal RAG", "Badcase Analysis"],
    image: "/yjy/assets/projects/caict-paper-search-workflow.png",
    cardImage: "/yjy/assets/projects/caict-cover.png",
    cardImageFit: "cover",
    cardImagePosition: "center",
    imagePosition: "center",
    detailImageFit: "contain",
    Icon: Workflow,
    accent: "coral",
    lead:
      "把复杂知识任务拆成可观察、可调试的 Agent 工作流，并用多模态 RAG 与分层评测定位路由、检索、生成和交付问题。",
    internship: {
      company: "中国信息通信研究院",
      role: "AI Agent 开发实习生",
      period: "2025.07 - 2025.10",
    },
    background:
      "项目面向企业内部行业简报、演讲稿、事实核查和顶会论文检索等知识办公场景。资料同时包含文本、截图、图表和多图组合，传统单路文本检索难以覆盖；单轮生成容易产生事实幻觉，也难以稳定满足引用、格式与文档交付要求；当多节点 Agent 链路异常时，根因又难以定位。因此项目以内部 PoC 形式验证：复杂任务能否拆成可调试的工作流，以及多模态 RAG 与分层评测能否让问题被量化和定位。",
    techStack: [
      "Dify",
      "Coze",
      "低代码 Agent 平台",
      "LangChain",
      "Qwen 系列模型",
      "RAG",
      "Embedding",
      "知识库",
      "新闻检索插件",
      "工作流编排",
      "意图路由",
      "Prompt Engineering",
      "文档格式转换",
      "Badcase 分析",
    ],
    taskSummary: [
      "参与 Dify、Coze 等低代码 Agent 平台上的端到端工作流搭建与验证，梳理问答分支、知识库调用、内容生成、模型对比和结果交付节点。",
      "重点负责多模态 RAG 检索评测与 Badcase 归因，包括四类 Query 的检索链路、候选融合与精排、分层指标设计，以及路由—检索—生成—交付四层问题定位和回归验证。核心目标是让方案能在统一用例下比较，让异常能落到具体环节。",
    ],
    actionHeading: "关键行动",
    responsibilities: [
      {
        title: "将长链路拆成四层评测对象",
        detail:
          "把 Agent 链路拆为路由、检索、生成和交付四层，用固定用例逐节点检查意图与变量、候选与 Top-K、事实与引用、格式与下载链接。以“正确的信息是否在正确阶段出现”为判断原则：已召回但答案错误就检查上下文、模型或 Prompt；未进入候选则回到数据源、索引和召回策略。",
      },
      {
        title: "设计四类 Query 的多模态检索链路",
        detail:
          "评测覆盖文本、单图、多图和图文组合 Query。文本侧采用 BM25 与 Dense Embedding 双路召回；图片侧结合图像向量、OCR 与 Caption。针对各通道原始分数不可直接比较的问题，使用 RRF 或归一化加权融合候选，再用 Reranker 对 Top-K 二阶段精排，先保证召回覆盖，再提升前列相关性。",
      },
      {
        title: "用分层指标判断问题位置",
        detail:
          "检索侧使用 Hit@K、MRR、nDCG@10 与人工相关性标注，分别回答“是否召回”“正确结果是否足够靠前”和“整体排序是否合理”；生成侧检查上下文相关性、忠实度与答案相关性；工作流侧检查节点成功、引用可用、格式正确和链接交付，避免只凭最终文本主观判断。",
      },
      {
        title: "形成 Badcase 分类与回归闭环",
        detail:
          "将异常分为路由、检索、生成和交付四类，分别调整路由规则、知识源、召回与融合策略、Prompt 或输出约束。修复后把原 Badcase 固化为回归样本，并保留正常样本复测，避免局部修复破坏其他链路。",
      },
      {
        title: "定位论文检索瓶颈并验证替代链路",
        detail:
          "逐节点确认论文检索的主要瓶颈位于数据获取侧：低代码爬虫单次约 100 篇上限、反爬和覆盖不完整。随后验证按会议建立标题知识库、按研究方向召回候选、用户选定后再联网检索与解析的替代链路，并用 LangChain 验证文档加载、Embedding、向量索引、Retriever 与上下文问答流程。",
      },
      {
        title: "验证多 Agent 路由与多平台实现",
        detail:
          "根据任务类型把请求路由至行业简报、演讲稿、事实核查或论文检索等垂直 Agent / 工作流，再汇总到统一校验与交付节点；在 Dify、Coze 等平台中验证相近流程，比较问答分支、知识库接入、插件调用、节点调试和结果交付。该方案属于任务路由与工作流协同，不包装为具备自主规划和共享记忆的复杂 Multi-Agent 系统。",
      },
    ],
    resultHeading: "PoC 结果与方法沉淀",
    achievements: [
      "参与完成行业简报、企业演讲稿、事实核查和顶会论文检索等垂直 Agent 的 PoC 验证，形成按任务路由至垂直工作流、再进入统一校验与交付节点的协同方案。",
      "覆盖文本、单图、多图和图文组合四类 Query，形成路由、检索、生成和交付四层评测框架，以及“固定用例—中间结果检查—Badcase 分类—针对性调整—回归复测”的定位方法。",
      "在论文检索场景中定位单次约 100 篇抓取上限、反爬和覆盖不完整的数据获取瓶颈，并验证分会议知识库与 LangChain 本地检索问答替代链路的可行性。",
      "项目未正式上线，也缺少完整留存的评测规模和优化前后指标；网页结果仅呈现 PoC、评测方法、故障定位与方案边界，不描述为生产系统成果。",
    ],
    gallery: [
      {
        src: "/yjy/assets/projects/caict-workflow-overview-01.png",
        alt: "复杂 Agent 工作流前半段总览",
        caption: "证据 01｜脱敏后的复杂工作流前半段，展示输入、分支路由、知识调用与多条处理链路。",
      },
      {
        src: "/yjy/assets/projects/caict-workflow-overview-02.png",
        alt: "复杂 Agent 工作流后半段总览",
        caption: "证据 02｜工作流后半段的生成、校验、条件分支与结果汇聚节点。",
      },
      {
        src: "/yjy/assets/projects/caict-multi-agent-routing.png",
        alt: "多任务 Agent 路由与统一交付工作流",
        caption: "证据 03｜按任务类型进入垂直工作流，再汇总至统一校验与交付节点的协同结构。",
      },
      {
        src: "/yjy/assets/projects/caict-paper-knowledge-base.png",
        alt: "按会议划分的论文知识库检索工作流",
        caption: "证据 04｜按顶会来源建立知识库并行检索候选论文，再聚合生成结果的链路。",
      },
      {
        src: "/yjy/assets/projects/caict-paper-search-fallback.png",
        alt: "论文检索与联网解析替代工作流",
        caption: "证据 05｜会议路由、候选输出、联网检索与论文解析组成的替代链路验证。",
      },
    ],
  },
  {
    index: "03",
    slug: "minimax-multimodal-evaluation",
    title: "内容安全多模态评测与数据闭环体系",
    projectName: "内容安全多模态评测与数据闭环体系",
    detailLayout: "internship-case-study",
    category: "CLIP · RAG · MODEL EVALUATION",
    period: "MiniMax · 2024.12—2025.03",
    description:
      "面向非互斥图片场景与专业长文档问答需求，构建 200+ 条场景语义描述、固定测试集及标准 Q&A 数据集，基于 CLIP 与 CherryStudio 完成多标签匹配、跨模型评测和 Badcase 复核。",
    result: "支撑团队将场景识别 mAP 由 62% 提升至 89%，并沉淀 Prompt、标准 Q&A、语义相似度评分及可复用的数据评测闭环。",
    tags: ["CLIP", "RAG Evaluation", "Q&A Dataset", "Badcase Analysis"],
    image: "/yjy/assets/projects/minimax-cover.jpg",
    cardImage: "/yjy/assets/projects/minimax-cover.jpg",
    cardImageFit: "cover",
    cardImagePosition: "center",
    imagePosition: "center",
    Icon: ChartNoAxesCombined,
    accent: "coral",
    lead:
      "参与多模态场景识别、专业长文档 RAG 评测及数据标注闭环建设。",
    internship: {
      company: "MiniMax",
      role: "大模型评测算法实习生",
      period: "2024.12 - 2025.03",
    },
    background:
      "实习期间参与两类评测工作。图片场景识别侧，业务标签并非互斥，原有 YOLO + CNN 分类链路容易受到人物主体、背景和相似视觉特征干扰；为降低误判而过度清洗数据，又会损害数据多样性与泛化。专业长文档 RAG 侧，团队缺少固定文档、问题、标准答案与统一评分口径，人工评测容易因答案表述差异产生争议，也难以公平比较模型。",
    techStack: [
      "CLIP",
      "Zero-shot Classification",
      "Prompt Engineering",
      "Cosine Similarity",
      "RAG Evaluation",
      "CherryStudio",
      "Q&A Dataset",
      "Python",
      "Badcase Analysis",
      "GPT-4 辅助标注",
    ],
    taskSummary: [
      "我的职责主要在数据与评测侧，并非主导 CLIP 模型训练：整理场景识别错误样本，构建场景语义描述词库和固定测试集，配合团队验证 CLIP 图文检索方案。",
      "同时整理多领域专业长文档，构建带固定标答的标准 Q&A 测试集，设计自动评分与跨模型对比流程，并使用领域评测 Agent 辅助数据生成和标注。",
    ],
    actionHeading: "实施过程",
    responsibilities: [
      {
        title: "建立图片场景的数据与标签口径",
        detail:
          "按标签冲突、主体干扰和语义混淆整理 Badcase，归纳“人像—健身房”“婚礼—白色被子”等高频问题。使用 GPT-4 生成候选场景描述，再结合实际图片人工筛选、改写与校验，构建 200+ 条场景语义描述词库及固定测试集，为团队从封闭集分类转向 CLIP 图文检索提供数据基础。",
      },
      {
        title: "构建专业长文档标准 Q&A",
        detail:
          "按领域与文档篇幅整理法律、金融、投资及学术语料，通过结构化 Prompt 让 LLM 基于原文生成候选问题和答案，并检查问题是否可由原文回答、答案是否明确、是否存在多种合理解释。校验后固定 Question 与 Gold Answer，避免评测人员临时判断。",
      },
      {
        title: "完成跨模型、跨参数对比实验",
        detail:
          "场景识别侧配合预训练 CLIP 零样本方案，通过 Prompt 模板和图文向量余弦相似度匹配场景，验证 Top-K、类目阈值、非互斥标签输出及典型混淆样本变化。RAG 侧固定测试文档、问题和标答，批量运行不同模型及实际调整过的参数配置，记录输出与响应耗时，保证实验输入一致。",
      },
      {
        title: "自动评分与 Badcase 复核",
        detail:
          "编写语义相似度脚本，对模型答案与标准答案编码并计算余弦相似度；对低分、临界分及数字、主体、否定关系等关键事实样本再人工复核。基于 CherryStudio 配置判决书解析、财报与研报解读等领域评测 Agent，用角色 Prompt、知识库和统一输出格式辅助候选 Q&A 生成、数据标注与结果评审。",
      },
    ],
    resultHeading: "项目结果与数据资产",
    outcomes: [
      { value: "62% → 89%", label: "团队场景识别 mAP" },
      { value: "200+", label: "场景语义描述" },
      { value: "2", label: "图片场景与长文档 RAG 评测方向" },
    ],
    achievements: [
      "在统一测试集和相同评测口径下，团队场景识别 mAP 由 62% 提升至 89%；个人工作重点是语义描述、固定测试集与 Badcase 归因，为模型方案和阈值迭代提供数据支撑。",
      "沉淀 200+ 条场景语义描述词库、固定测试数据和典型混淆样本，支持非互斥场景标签的 CLIP 图文匹配验证。",
      "形成覆盖多个专业领域和不同文档篇幅的标准 Q&A 测试数据，以及文档整理、问题生成、标答校验、批量推理、语义相似度评分与人工复核流程。",
      "统一不同模型与参数实验的数据和评分口径，减少因答案表述不同产生的人工评测争议，并沉淀可复用的 Prompt、标准 Q&A 与 Badcase 数据资产。",
    ],
  },
  {
    index: "04",
    slug: "intent-driven-trailer-selection",
    title: "基于多模态弱监督与动态专家路由的目标可控电影预告片生成",
    category: "Graduation Project · Future TV",
    period: "毕业设计 / 国家广电总局“未来电视”项目",
    description:
      "把数小时长电影转化为可解释、可控制、可评测的镜头候选序列，为不同创作意图提供差异化初版方案。",
    result: "Goal-MoE 的 F1@5 为 0.2618，Query Difference 为 0.7203，在镜头匹配与目标差异之间取得当前最佳平衡。",
    tags: ["Weak Supervision", "Mixture of Experts", "Dynamic Routing", "Controllable Generation"],
    image: "/yjy/assets/projects/trailer-generation-cover.jpg",
    cardImage: "/yjy/assets/projects/trailer-generation-cover.jpg",
    visual: "moe",
    imageFit: "cover",
    cardImageFit: "cover",
    cardImagePosition: "center",
    Icon: Clapperboard,
    accent: "gold",
    lead:
      "这不是让模型替代剪辑师，而是把“从整部电影里找素材”的高成本环节前置自动化：用户给出创作意图，系统从视觉、对白、声音和叙事位置中动态选择证据，返回更贴近目标的镜头排序。",
    heroLabel: "PROJECT 04 · 毕业设计 / 国家广电总局“未来电视”项目",
    overviewTitle: "预告片生成不是简单的视频压缩",
    background:
      "一部长电影包含大量日常对白、过渡镜头和重复情节。创作者真正需要的不是一套固定的“精彩片段”，而是服务于明确传播意图的镜头组合：动作导向强调节奏与冲击，情感导向强调人物关系，成长导向强调状态变化，悬疑导向强调信息控制。电影领域又缺少细粒度镜头标签，官方预告片只能代表一种已接受的剪辑偏好，不能被当作唯一答案。",
    challenge:
      "摘要式方法通常只输出单一重要性排序，不同创作要求容易得到近似结果；简单拼接视觉、对白、声音和时间特征，又会让强模态掩盖弱模态。项目因此需要同时解决弱标签构造、异质证据分工、目标条件融合与可控性评测。",
    responsibility:
      "个人工作聚焦从原始电影到目标化镜头排序的完整证据链：建立电影级数据边界和弱标签，设计视觉、对白、情绪、时间四类专家及查询条件路由，并负责融合方案对照、电影级数据划分、指标实现与失败分析。",
    targetUsers: [
      "预告片剪辑师：缩短找素材和粗排镜头的时间。",
      "内容运营与宣发团队：针对不同受众快速形成多个传播版本。",
      "影视研究人员：获得可复现的数据、模型和多维评测协议。",
    ],
    businessOpportunity:
      "系统定位为“目标条件下的镜头检索与决策支持工具”：模型扩大有效候选召回、解释选择依据并形成差异化排序，人负责审美判断、版权把关和最终剪辑。",
    problemBreakdown: [
      {
        title: "数据从哪里来",
        detail: "公开数据集通常只提供片名、元数据或预告片链接，项目需要完成研究资源检索、配对、去重、损坏检查与来源记录，再建立电影级数据边界。",
      },
      {
        title: "没有镜头级标签怎么训练",
        detail: "数据只有电影与官方预告片的成对关系，没有标出哪些原片镜头应该入选，因此需要构造可追溯的弱标签并记录标签来源与置信度。",
      },
      {
        title: "多模态证据如何分工",
        detail: "视觉、对白、声音和时间位置提供不同证据；不同目标依赖的证据不同，简单拼接会让强模态掩盖弱模态。",
      },
      {
        title: "怎么证明结果可控",
        detail: "评测必须同时回答镜头是否相关、不同查询是否产生差异、结果是否满足序列与预算约束，避免四类查询返回同一套高频镜头。",
      },
    ],
    taskTitle: "建立一条从原始电影到目标化镜头排序的完整证据链",
    taskDefinition:
      "输入一部完整电影和一条创作查询，输出给定时长预算下的镜头候选排序，并说明视觉、对白、情绪和时间结构分别贡献了多少证据。",
    goals: [
      { title: "动作节奏", detail: "动作强度、声学能量、剪辑速度和冲突升级。" },
      { title: "情感关系", detail: "人物互动、情绪变化、关系建立与关系破裂。" },
      { title: "人物成长", detail: "角色状态、目标、受挫、选择和阶段性转变。" },
      { title: "悬疑氛围", detail: "未知信息、异常事件、威胁、线索与信息延迟。" },
    ],
    successCriteria: [
      "从极长输入中召回接近真实剪辑偏好的镜头。",
      "更换创作目标后，输出集合和排序发生可解释变化。",
      "电影、弱标签和特征严格按电影划分，避免同电影泄漏。",
      "模态缺失或标签置信度较低时仍能稳定给出结果。",
      "保留人工复核空间，不把单一自动指标包装成创作质量结论。",
    ],
    methodTitle: "从弱标签构建到目标条件动态融合",
    approach: [
      "建立电影级数据边界：完成电影—预告片配对、文件探测、重复检查和电影级划分；所有镜头、标签与特征继承电影 ID。",
      "把长电影切成统一镜头单元：以镜头时间区间对齐视觉帧、音频窗口、ASR 对白和相对时间位置，不提前人工筛选候选。",
      "构建多模态弱监督：将官方预告片画面映射回原电影，并用 LLM 将对白转为人物、冲突、情绪、叙事功能和目标相关性信号；每条标签保留来源、分数与置信度。",
      "训练四类证据专家：视觉专家学习动作与场景，对白专家学习关系与冲突，情绪专家学习声音能量与节奏，时间专家学习叙事位置先验。",
      "用创作意图动态路由：路由器结合目标、专家输出、标签置信度和模态缺失掩码，为每个镜头分配动态专家权重。",
      "采用三阶段训练：先专家预训练，再冻结专家训练路由器，最后以小学习率联合微调，并加入置信度加权评分、电影内排序与路由负载约束。",
    ],
    decisions: [
      {
        title: "为什么不直接拼接所有模态",
        choice: "按镜头和查询动态分配证据权重",
        reason: "电影中存在无对白、背景音乐主导、黑场和快速蒙太奇；动态路由能结合缺失掩码降低无效模态影响。",
      },
      {
        title: "为什么不用单一重要性模型",
        choice: "将镜头质量与目标适配度分开建模",
        reason: "单一模型容易只学习“普遍精彩”的镜头，让多个查询收敛到同一排序；专家分工和目标条件路由用于保持版本差异。",
      },
      {
        title: "为什么从强化学习转向弱监督 MoE",
        choice: "降低复合奖励偏好并增强可归因性",
        reason: "样本有限时，人工奖励权重容易被误当作真实创作偏好；弱监督 MoE 能直接利用成片关系和多模态证据训练，专家贡献与消融更易追踪。",
      },
      {
        title: "为什么保留标签置信度",
        choice: "把来源可靠性纳入训练与路由",
        reason: "弱标签不是人工真值；置信度帮助模型区分高可信视觉匹配、模糊对白分析与缺失模态，降低噪声放大。",
      },
      {
        title: "为什么严格按电影划分",
        choice: "以电影作为最小隔离单元",
        reason: "相邻镜头和同片视觉风格高度相似，按镜头随机划分会引入近重复内容并造成指标虚高。",
      },
    ],
    userFlow: [
      { title: "选择影片", detail: "读取影片镜头及已对齐的视、听、文和时间特征。" },
      { title: "输入创作意图", detail: "研究版本从动作、情感、成长和悬疑四类预设目标中选择。" },
      { title: "查看目标化排序", detail: "返回镜头缩略图、时间码、对白摘要、综合得分与专家权重。" },
      { title: "比较多个版本", detail: "切换目标后高亮新增、移除和重排镜头，检查结果是否真正变化。" },
      { title: "人工确认与导出", detail: "锁定镜头、删除重复片段、调整时长预算，再进入后续剪辑流程。" },
    ],
    flowBoundary:
      "当前研究完成了目标条件镜头排序；完整节奏剪辑、转场、音乐重编和最终成片仍属于后续序列组织与人工制作环节。",
    alternativesTitle: "把 MoE 当作融合方法，而不是未经验证的结构偏好",
    alternatives:
      "在相同电影级划分和同源弱标签下，对比早期融合、静态晚期融合、门控融合、跨模态注意力、低秩双线性交互和共享—私有解耦等路径。Goal-MoE 在镜头匹配与查询差异之间取得当前最佳平衡；Cross-Attention 的排序指标更高，但多个目标更容易返回相近结果。当前证据只支持目标条件专家系统更适合本项目，不能外推为 MoE 在所有多模态任务上普遍更优。",
    resultsTitle: "从单一镜头排序走向目标化决策",
    evaluation: [
      "镜头匹配：使用 Precision、Recall 与 F1 衡量模型能否召回接近已接受剪辑偏好的镜头；F1@5 的“5”是预先声明的镜头索引容差半径，并同步报告严格零容差结果。",
      "排序质量：使用 adapted nDCG 衡量相关镜头是否位于排序前部；它反映排序质量，不等同于整体创作质量。",
      "目标可控性：使用 Query Difference、跨目标 Jaccard 和完全重复目标对，检查不同查询是否真正改变镜头集合。",
      "稳定性与泛化：采用电影级嵌套五折、多个随机种子和配对 bootstrap；开发折选参，测试折只评估一次，封存集合不参与方案选择。",
      "人工评价：自动指标只验证镜头匹配和查询差异；叙事连贯、悬念控制、审美与传播效果仍需专业人工评价。",
    ],
    failureCases: [
      {
        title: "自动指标不能替代创作判断",
        detail: "镜头匹配与排序指标只表示对已接受官方剪辑偏好的接近程度，不能代表叙事、审美或真实传播效果。",
      },
      {
        title: "跨模态注意力仍有优势",
        detail: "Cross-Attention 的 adapted nDCG 更高，提示后续可探索“跨模态注意力编码 + 目标条件专家决策”的混合结构。",
      },
      {
        title: "适配实现不等于官方复现",
        detail: "新增融合结构均为项目适配实现，不称为相应论文的官方完整复现；更大差异还需结合固定专家融合消融解释。",
      },
    ],
    failureLabel: "LIMITATIONS & NEXT STEP",
    failureTitle: "边界、反例与下一步",
    learning:
      "下一阶段重点不是继续增加专家数量，而是验证跨模态注意力编码与目标条件专家决策的混合结构，并补充专业剪辑师和真实观众评价。",
    outcomes: [
      { value: "4", label: "类目标化创作意图" },
      { value: "+58%", label: "F1@5 相比随机基线" },
      { value: "0.72", label: "Query Difference" },
      { value: "6", label: "类融合方案对照" },
    ],
    resultExplanation:
      "动态路由模型 F1@5 为 0.2618，高于固定均匀专家融合的 0.2566 和随机基线的 0.1653；Query Difference 为 0.7203。完整 Goal-MoE 在镜头匹配与查询差异之间取得当前最佳平衡。",
    metricNote:
      "F1@5 为 MMSC-style adapted 镜头索引容差指标，并非 Top-5 F1；新增融合结构均为项目适配实现。",
    gallery: [
      {
        src: "/yjy/assets/projects/trailer-intent-framework.png",
        alt: "早期目标驱动强化学习方案总体框架",
        caption: "证据 01｜早期强化学习方案：以对白候选、状态表示、策略网络与复合奖励完成目标驱动选择，为后续转向弱监督 MoE 提供对照。",
      },
      {
        src: "/yjy/assets/projects/trailer-tsm-framework.png",
        alt: "Temporal-Semantic MMR 候选空间压缩框架",
        caption: "证据 02｜前期 TSM 验证：对白语义、叙事阶段覆盖和 MMR 去冗余用于压缩长电影候选空间。",
      },
      {
        src: "/yjy/assets/projects/trailer-llm-scoring.png",
        alt: "对白片段 LLM 多维语义评分与校验流程",
        caption: "证据 03｜对白弱标签构造：五维语义评分、四级解释与稳定性校验，为对白专家提供结构化监督信号。",
      },
      {
        src: "/yjy/assets/projects/trailer-mmr-selection.png",
        alt: "基于 MMR 的非冗余候选选择过程",
        caption: "证据 04｜候选去冗余实验：MMR 在语义相关性与候选间相似度之间进行显式权衡。",
      },
      {
        src: "/yjy/assets/projects/trailer-policy-network.png",
        alt: "早期目标驱动镜头选择策略网络",
        caption: "证据 05｜早期序列策略方案：联合已选序列、候选特征、用户目标与叙事阶段；其奖励依赖问题促成了向弱监督动态路由的方案迁移。",
      },
    ],
    boundary:
      "项目是面向创作者的镜头检索与决策支持研究，不替代剪辑师。当前已验证目标条件镜头排序，但完整节奏剪辑、转场、音乐重编与最终成片仍需人工完成；官方预告片相关指标只衡量对已接受剪辑偏好的接近程度。",
  },
  {
    index: "05",
    slug: "music-guided-trailer-generation",
    title: "音乐引导电影预告片生成",
    category: "Research · Multimodal Video",
    period: "IEEE / CVAA 2025",
    description:
      "围绕音乐驱动预告片生成，研究多粒度音乐特征、轻量前景—背景解耦与跨模态语义对齐。",
    result: "CMTD 与 MovieNet-M 的 F1@5 较 IPOT 分别提升 7.6% 与 5.4%。",
    tags: ["Music-to-Video", "Foreground / Background", "Cross-modal", "F1@K"],
    image: "/yjy/assets/projects/dmt-framework.png",
    cardImage: "/yjy/assets/projects/dmt-trailer-examples.png",
    imageFit: "contain",
    cardImageFit: "contain",
    cardImagePosition: "center",
    cardAspectRatio: "16 / 9",
    Icon: AudioLines,
    accent: "gold",
    lead:
      "让音乐的全局情绪与局部节奏，同时参与电影镜头的选择和排序。",
    background:
      "音乐引导预告片生成需要从长电影中选择并排序镜头。只使用全局音乐特征容易忽略局部节奏变化，而把画面整体编码又会混淆前景主体与背景氛围的作用。",
    challenge:
      "需要在有限计算量下区分前景和背景语义，并让粗粒度情绪、细粒度节奏与不同视觉层级建立稳定对应。",
    responsibility:
      "参与多模态视频生成方向研究、方法梳理、实验评测与论文工作；网站只陈述论文公开方法和公开结果，不额外扩张尚未核实的个人模块。",
    problemBreakdown: [
      {
        title: "音乐不是单一尺度信号",
        detail: "整体情绪决定预告片基调，局部节奏影响镜头切换；只使用单段或全局音乐表示会损失其中一类信息。",
      },
      {
        title: "画面主体与氛围作用不同",
        detail: "前景主体承载动作与人物语义，背景提供场景和氛围，整体编码容易让两类线索互相干扰。",
      },
      {
        title: "跨模态对齐需要分层",
        detail: "粗粒度音乐与全局画面、细粒度音乐与局部视觉内容需要建立不同层级的对应关系。",
      },
    ],
    approach: [
      "使用粗粒度与细粒度音乐表征描述整体情绪和局部节奏。",
      "通过轻量前景—背景解耦模块得到层次化视觉表示，并使用伪监督提供弱语义约束。",
      "对音乐与视觉特征进行自适应融合和跨模态对齐，用于候选镜头选择与排序。",
      "在 CMTD 与 MovieNet-M 上使用 P@K、R@K、F1@K 进行对比与消融分析。",
    ],
    decisions: [
      {
        title: "为什么做多粒度音乐建模",
        choice: "同时编码片段级局部节奏和整体音乐语义",
        reason: "预告片镜头既要符合整段情绪，又要响应局部节拍变化；单尺度表征难以兼顾两者。",
      },
      {
        title: "为什么做前景—背景解耦",
        choice: "使用轻量门控编码器分离主体与环境语义",
        reason: "解耦后再融合可以突出与音乐高度相关的视觉区域；T-SNE 用于检查两类特征是否形成可分结构。",
      },
      {
        title: "为什么使用自适应融合",
        choice: "让模型按样本调节不同视觉层级和音乐粒度的贡献",
        reason: "固定权重无法覆盖动作、对白、氛围镜头等差异较大的片段，自适应权重更适合内容变化。",
      },
    ],
    evaluation: [
      "在 CMTD 与 MovieNet-M 两个数据集上与音乐引导基线 IPOT 对比。",
      "使用 P@1/3/5、R@1/3/5 与 F1@1/3/5 同时观察准确性、覆盖度和综合排序表现。",
      "结合组件消融与 T-SNE 可视化，检查性能增益是否与前景—背景解耦机制一致。",
    ],
    failureCases: [
      {
        title: "弱伪监督可能带来噪声",
        detail: "前景—背景解耦依赖弱监督信号，伪标签不稳定时会影响门控融合，需要用消融和可视化验证。",
      },
      {
        title: "离线镜头匹配不等于完整生成体验",
        detail: "P/R/F1 评价候选镜头匹配，仍不能覆盖叙事连贯性、版权、人工审美与真实剪辑效率。",
      },
    ],
    learning:
      "研究工作的核心不是简单增加模块，而是先定义音乐和视觉各自的粒度，再让模块、损失、消融和可视化围绕同一假设形成证据链。",
    outcomes: [
      { value: "0.4003", label: "CMTD F1@5" },
      { value: "+7.6%", label: "较 IPOT" },
      { value: "+5.4%", label: "MovieNet-M 增益" },
    ],
    external: {
      label: "查看 IEEE 论文",
      href: "https://ieeexplore.ieee.org/document/11193418",
    },
    gallery: [
      {
        src: "/yjy/assets/projects/dmt-tsne.png",
        alt: "前景与背景特征的 T-SNE 可视化对比",
        caption:
          "特征解耦可视化：在 CMTD 与 MovieNet-M 上观察前景、背景表征的分离程度，用于验证轻量解耦模块是否学到可区分语义。",
      },
      {
        src: "/yjy/assets/projects/dmt-results.png",
        alt: "DMT 与 IPOT 在两个数据集上的对比实验结果",
        caption:
          "跨数据集对比：使用 P@K、R@K 与 F1@K 同时检查镜头匹配的准确性、覆盖度及综合表现。",
      },
    ],
    boundary:
      "首图与实验图来自该研究对应的课题组学位论文材料，用于说明公开的方法框架和实验结论；网站不将师姐的学位论文表述为个人成果。该工作证明的是音乐—视频跨模态理解、镜头匹配和实验分析能力，不等同于训练过 Diffusion 视频生成模型。",
  },
  {
    index: "06",
    slug: "river-basin-inspection",
    title: "河道智能巡检目标检测",
    category: "Research · Object Detection",
    period: "ACM Digital Library / IoTML 2024",
    description:
      "面向复杂河道背景中的小目标检测，完成五类目标数据构建、YOLO 系列模型对比与多尺度特征融合优化。",
    result: "通过浅层 P2 特征与 FPN/PAN 融合优化，使 mAP@0.5 由 0.68 提升至 0.76。",
    tags: ["YOLOv5", "Small Object", "P2 Feature", "FPN / PAN"],
    image: "/yjy/assets/projects/river-detection-results.png",
    cardImage: "/yjy/assets/projects/river-abnormal-docking.png",
    cardImageFit: "cover",
    cardImagePosition: "center",
    cardAspectRatio: "16 / 9",
    imagePosition: "center top",
    Icon: Waves,
    accent: "coral",
    lead:
      "针对河道场景的小目标与复杂背景，让高分辨率细节更早进入检测特征融合。",
    background:
      "河道巡检图像中存在漂浮物、远距离目标和复杂水面反光。小目标在深层下采样过程中容易丢失边缘、纹理与位置信息。",
    challenge:
      "原始 YOLOv5s 主要使用 P3/P4/P5 特征，对中大目标更友好；需要提升浅层细节利用，同时控制模型复杂度。",
    responsibility:
      "参与五类目标数据集构建与标注、数据增强、训练/测试划分、YOLOv5s/v8/v9 对比，以及小目标检测结构和实验结果分析。",
    problemBreakdown: [
      {
        title: "小目标信息易丢失",
        detail: "漂浮物和远距离船只在多次下采样后只占少量像素，边缘与位置特征容易被深层语义覆盖。",
      },
      {
        title: "河道背景干扰强",
        detail: "水面反光、岸线、密集船只和俯视角变化会造成背景误检及目标遮挡。",
      },
      {
        title: "类别分布与外观不均衡",
        detail: "正常船只、异常行为、漂浮物等类别样本量和难度不同，需要结合标签分布和混淆矩阵分析。",
      },
    ],
    approach: [
      "构建并清洗五类河道巡检目标数据，统一标注和数据划分。",
      "对比 YOLOv5s、YOLOv8 与 YOLOv9，分析小目标漏检和复杂背景误检。",
      "在 YOLOv5 Neck 中引入浅层 P2 特征，增强高分辨率位置与边缘信息。",
      "优化 FPN/PAN 多尺度融合路径，并结合指标与可视化结果验证结构改动。",
    ],
    decisions: [
      {
        title: "为什么从数据分析开始",
        choice: "先检查类别数量、框中心、宽高和尺度分布",
        reason: "小目标问题可能来自样本不足、标注偏差或尺度分布，只有先明确数据特征，结构优化才有依据。",
      },
      {
        title: "为什么增强浅层特征",
        choice: "让更高分辨率的边缘和位置信息进入多尺度融合",
        reason: "深层特征语义强但空间分辨率低；河道漂浮物和远距离目标更依赖浅层细节。",
      },
      {
        title: "为什么用多类指标与可视化",
        choice: "训练曲线、Precision / Recall、mAP、混淆矩阵与检测图共同判断",
        reason: "单一 mAP 无法说明是类别混淆、漏检还是置信度阈值问题，结果图能补充真实场景表现。",
      },
    ],
    evaluation: [
      "固定训练/测试划分，对比不同 YOLO 配置及多尺度特征方案。",
      "观察损失收敛、Precision、Recall、mAP@0.5 与 mAP@0.5:0.95。",
      "通过混淆矩阵和检测结果复盘 normal、abnormal、package、bottle、sandmining 等类别。",
    ],
    failureCases: [
      {
        title: "异常行为被预测为背景",
        detail: "异常类别样本更少且外观差异大，需增加困难样本并按尺度、遮挡和场景分桶分析漏检。",
      },
      {
        title: "包装物、瓶子与普通目标混淆",
        detail: "小目标像素不足且水面反光明显，需要检查标签一致性、输入分辨率和浅层特征贡献。",
      },
    ],
    learning:
      "这项研究建立了从标签分布、结构假设到混淆矩阵和检测可视化的完整目标检测分析流程，也明确区分了离线研究结果与真实巡检系统部署。",
    outcomes: [
      { value: "0.76", label: "优化后 mAP@0.5" },
      { value: "+0.08", label: "相对基线提升" },
      { value: "5 类", label: "河道巡检目标" },
    ],
    external: {
      label: "查看 ACM 论文",
      href: "https://dl.acm.org/doi/10.1145/3697467.3697675",
    },
    gallery: [
      {
        src: "/yjy/assets/projects/river-model-data.png",
        alt: "YOLOv5s 网络结构与部分河道巡检训练数据",
        caption:
          "数据与模型：论文展示的 YOLOv5s 检测网络，以及经过清洗、统一标注并用于训练的部分河道图像。",
      },
      {
        src: "/yjy/assets/projects/river-training-analysis.png",
        alt: "河道目标检测混淆矩阵、标签分布和训练指标",
        caption:
          "训练诊断：结合混淆矩阵、类别分布、损失曲线、Precision、Recall 与 mAP 定位类别混淆和小目标漏检问题。",
      },
    ],
    boundary:
      "页面图片截取自公开论文中的模型、数据、检测结果与训练分析图。论文结果用于说明目标检测实验能力，不将研究原型包装为已部署的河道生产系统。",
  },
];

export const strengths = [
  {
    title: "模型训评",
    description:
      "从数据质量、训练配置、策略消融到指标归因，建立可复现的模型评测闭环。",
    Icon: ChartNoAxesCombined,
    tone: "ink",
  },
  {
    title: "Agent 应用",
    description:
      "理解 RAG、Embedding 与多阶段工作流，能够定位检索、生成和结果交付问题。",
    Icon: BrainCircuit,
    tone: "cyan",
  },
  {
    title: "数据工程",
    description:
      "具备格式转换、自动标注、可视化质检和自动化评测工具建设经验。",
    Icon: DatabaseZap,
    tone: "coral",
  },
  {
    title: "多模态研究",
    description:
      "覆盖图文检索、视频生成和视觉检测，能够快速阅读论文并完成实验验证。",
    Icon: Clapperboard,
    tone: "gold",
  },
];
