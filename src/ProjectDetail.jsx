import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Maximize2, X } from "lucide-react";
import ProjectVisual from "./ProjectVisual";
import ActionAccordion from "./ActionAccordion";

function EvidenceGallery({ items }) {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!activeImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveImage(null);
    };

    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return (
    <>
      <div className="evidence-gallery">
        {items.map((item) => (
          <figure key={item.src}>
            {item.type === "video" ? (
              <video controls preload="metadata" playsInline aria-label={item.alt}>
                <source src={item.src} type="video/mp4" />
                当前浏览器不支持视频播放。
              </video>
            ) : (
              <button
                className="evidence-image-button"
                type="button"
                onClick={() => setActiveImage(item)}
                aria-label={`放大查看：${item.alt}`}
              >
                <img src={item.src} alt={item.alt} />
                <span><Maximize2 size={18} aria-hidden="true" /> 点击放大</span>
              </button>
            )}
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      {activeImage ? (
        <div
          className="evidence-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveImage(null);
          }}
        >
          <button
            className="evidence-lightbox-close"
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="关闭大图"
            autoFocus
          >
            <X size={24} aria-hidden="true" />
          </button>
          <div className="evidence-lightbox-content">
            <img src={activeImage.src} alt={activeImage.alt} />
            <p>{activeImage.caption}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

function InternshipProjectDetail({ project }) {
  const displayTitle = project.projectName || project.title;

  return (
    <main className="project-detail-page internship-detail-page">
      <section className="project-detail-hero internship-detail-hero">
        <div className="content-width">
          <a className="project-back" href="#projects">
            <ArrowLeft size={18} aria-hidden="true" /> 返回项目列表
          </a>
          <div className="project-detail-heading">
            <div>
              <p className="project-detail-index">INTERNSHIP CASE STUDY · {project.internship.period}</p>
              <h1>{displayTitle}</h1>
            </div>
            <p>{project.lead}</p>
          </div>
        </div>
      </section>

      <section className="project-detail-band internship-experience-band">
        <div className="content-width detail-two-column">
          <div>
            <p className="detail-label">INTERNSHIP EXPERIENCE</p>
            <h2>实习经历</h2>
          </div>
          <div className="internship-meta-card">
            <strong>{project.internship.company}</strong>
            <span>{project.internship.role}</span>
            <time>{project.internship.period}</time>
          </div>
        </div>
      </section>

      <section className="project-detail-band internship-background-band">
        <div className="content-width detail-two-column">
          <div>
            <p className="detail-label">PROJECT BACKGROUND</p>
            <h2>项目背景</h2>
          </div>
          <div className="detail-prose internship-background-copy">
            <p>{project.background}</p>
            <h3>技术架构</h3>
            <div className="internship-tech-stack" aria-label="项目技术架构">
              {project.techStack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      {project.taskSummary?.length ? (
        <section className="project-detail-band internship-task-band">
          <div className="content-width detail-two-column">
            <div>
              <p className="detail-label">TASK</p>
              <h2>个人任务</h2>
            </div>
            <div className="internship-task-copy">
              {project.taskSummary.map((item) => <p key={item}>{item}</p>)}
              {project.keyQuestions?.length ? (
                <div className="internship-key-questions">
                  <h3>需要回答的四个问题</h3>
                  <ol>
                    {project.keyQuestions.map((item) => <li key={item}>{item}</li>)}
                  </ol>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <section className="project-detail-band internship-responsibilities-band">
        <div className="content-width">
          <div className="detail-section-heading">
            <p className="detail-label">{project.actionHeading ? "ACTION" : "RESPONSIBILITIES"}</p>
            <h2>{project.actionHeading || "主要职责"}</h2>
          </div>
          <ActionAccordion items={project.responsibilities} />
        </div>
      </section>

      <section className="project-detail-band internship-achievements-band">
        <div className="content-width">
          <div className="detail-section-heading">
            <p className="detail-label">RESULT</p>
            <h2>{project.resultHeading || "项目成效"}</h2>
          </div>
          {project.outcomes?.length ? (
            <div className="detail-metrics internship-outcome-metrics">
              {project.outcomes.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          ) : null}
          <div className="internship-achievement-list">
            {project.achievements.map((item) => (
              <article key={item}>
                <CheckCircle2 size={22} aria-hidden="true" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {project.boundary ? (
        <section className="project-detail-band project-detail-boundary">
          <div className="content-width detail-two-column">
            <div>
              <p className="detail-label">BOUNDARY</p>
              <h2>事实边界</h2>
            </div>
            <div>
              <p>{project.boundary}</p>
            </div>
          </div>
        </section>
      ) : null}

      {project.gallery?.length ? (
        <section className="project-detail-band project-detail-evidence internship-evidence-band">
          <div className="content-width">
            <div className="detail-section-heading">
              <p className="detail-label">EVIDENCE</p>
              <h2>相关证据</h2>
            </div>
            <EvidenceGallery items={project.gallery} />
          </div>
        </section>
      ) : null}

      <section className="project-detail-next">
        <div className="content-width">
          <a href="#projects">继续查看其他项目 <ArrowUpRight size={19} aria-hidden="true" /></a>
        </div>
      </section>
    </main>
  );
}

export default function ProjectDetail({ project }) {
  if (project.detailLayout === "internship-case-study") {
    return <InternshipProjectDetail project={project} />;
  }

  return (
    <main className="project-detail-page">
      <section className="project-detail-hero">
        <div className="content-width">
          <a className="project-back" href="#projects">
            <ArrowLeft size={18} aria-hidden="true" /> 返回项目列表
          </a>
          <div className="project-detail-heading">
            <div>
              <p className="project-detail-index">{project.heroLabel || `PROJECT ${project.index} · ${project.period}`}</p>
              <h1>{project.title}</h1>
            </div>
            <p>{project.lead}</p>
          </div>
        </div>
        <div className="project-detail-visual">
          <ProjectVisual project={project} />
        </div>
      </section>

      <section className="project-detail-band project-detail-overview">
        <div className="content-width detail-two-column">
          <div>
            <p className="detail-label">BACKGROUND</p>
            <h2>{project.overviewTitle || "为什么要做"}</h2>
          </div>
          <div className="detail-prose">
            <p>{project.background}</p>
            <h3>核心问题</h3>
            <p>{project.challenge}</p>
            <h3>我的工作边界</h3>
            <p>{project.responsibility}</p>
            {project.targetUsers?.length ? (
              <>
                <h3>目标用户</h3>
                <ul className="detail-bullet-list">
                  {project.targetUsers.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </>
            ) : null}
            {project.businessOpportunity ? (
              <>
                <h3>业务定位</h3>
                <p>{project.businessOpportunity}</p>
              </>
            ) : null}
          </div>
        </div>
      </section>

      {project.problemBreakdown?.length ? (
        <section className="project-detail-band project-detail-breakdown">
          <div className="content-width detail-two-column">
            <div>
              <p className="detail-label">PROBLEM BREAKDOWN</p>
              <h2>问题怎么拆</h2>
            </div>
            <div className="breakdown-list">
              {project.problemBreakdown.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {project.taskDefinition ? (
        <section className="project-detail-band project-detail-task">
          <div className="content-width detail-two-column">
            <div>
              <p className="detail-label">TASK · PRODUCT & RESEARCH GOAL</p>
              <h2>{project.taskTitle || "任务定义"}</h2>
            </div>
            <div className="detail-prose">
              <p>{project.taskDefinition}</p>
              {project.goals?.length ? (
                <div className="detail-card-grid" aria-label="创作目标">
                  {project.goals.map((item) => (
                    <article key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </article>
                  ))}
                </div>
              ) : null}
              {project.successCriteria?.length ? (
                <>
                  <h3>成功标准</h3>
                  <ul className="detail-bullet-list">
                    {project.successCriteria.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <section className="project-detail-band project-detail-method">
        <div className="content-width">
          <div className="detail-section-heading">
            <p className="detail-label">ACTION · SOLUTION</p>
            <h2>{project.methodTitle || "技术路径"}</h2>
          </div>
          <ol className="method-list">
            {project.approach.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
          {project.decisions?.length ? (
            <div className="decision-section">
              <div className="detail-section-heading">
                <p className="detail-label">KEY DECISIONS</p>
                <h2>为什么这样选</h2>
              </div>
              <div className="decision-list">
                {project.decisions.map((item, index) => (
                  <article key={item.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <strong>{item.choice}</strong>
                    <p>{item.reason}</p>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {project.userFlow?.length ? (
        <section className="project-detail-band project-detail-flow">
          <div className="content-width">
            <div className="detail-section-heading">
              <p className="detail-label">USER FLOW</p>
              <h2>从一句创作意图到可复核的镜头初稿</h2>
            </div>
            <ol className="flow-list">
              {project.userFlow.map((item, index) => (
                <li key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            {project.flowBoundary ? <p className="flow-boundary">{project.flowBoundary}</p> : null}
          </div>
        </section>
      ) : null}

      {project.alternatives ? (
        <section className="project-detail-band project-detail-alternatives">
          <div className="content-width detail-two-column">
            <div>
              <p className="detail-label">ALTERNATIVES</p>
              <h2>{project.alternativesTitle || "替代方案验证"}</h2>
            </div>
            <div className="detail-prose">
              <p>{project.alternatives}</p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="project-detail-band project-detail-results">
        <div className="content-width">
          <div className="detail-section-heading">
            <p className="detail-label">RESULTS</p>
            <h2>{project.resultsTitle || "可验证结果"}</h2>
          </div>
          <div className={`detail-metrics ${project.outcomes.length === 4 ? "is-four" : ""}`}>
            {project.outcomes.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <p className="detail-result-summary">
            <CheckCircle2 size={20} aria-hidden="true" /> {project.result}
          </p>
          {project.resultExplanation ? <p className="detail-result-explanation">{project.resultExplanation}</p> : null}
          {project.evaluation?.length ? (
            <div className="evaluation-method">
              <h3>评测证据</h3>
              <ul>
                {project.evaluation.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ) : null}
          {project.metricNote ? <p className="detail-metric-note">指标说明｜{project.metricNote}</p> : null}
        </div>
      </section>

      {project.failureCases?.length ? (
        <section className="project-detail-band project-detail-failures">
          <div className="content-width detail-two-column">
            <div>
              <p className="detail-label">{project.failureLabel || "BADCASE REVIEW"}</p>
              <h2>{project.failureTitle || "失败如何定位"}</h2>
            </div>
            <div className="failure-list">
              {project.failureCases.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {project.gallery?.length ? (
        <section className="project-detail-band project-detail-evidence">
          <div className="content-width">
            <div className="detail-section-heading">
              <p className="detail-label">EVIDENCE</p>
              <h2>过程与证据</h2>
            </div>
            <EvidenceGallery items={project.gallery} />
          </div>
        </section>
      ) : null}

      <section className="project-detail-band project-detail-boundary">
        <div className="content-width detail-two-column">
          <div>
            <p className="detail-label">BOUNDARY</p>
            <h2>事实边界</h2>
          </div>
          <div>
            <p>{project.boundary}</p>
            {project.learning ? (
              <div className="detail-learning">
                <span>复盘与迁移</span>
                <p>{project.learning}</p>
              </div>
            ) : null}
            {project.external ? (
              <a className="detail-external" href={project.external.href} target="_blank" rel="noreferrer">
                {project.external.label} <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="project-detail-next">
        <div className="content-width">
          <a href="#projects">继续查看其他项目 <ArrowUpRight size={19} aria-hidden="true" /></a>
        </div>
      </section>
    </main>
  );
}
