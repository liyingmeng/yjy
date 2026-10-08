export default function ProjectVisual({ project, compact = false }) {
  if (project.visual === "moe") {
    const experts = ["视觉", "对白", "情绪", "时间"];
    const goals = ["动作节奏", "情感关系", "人物成长", "悬疑氛围"];

    return (
      <div className={`research-visual moe-visual ${compact ? "is-compact" : ""}`} aria-label="完整电影经多模态专家与动态路由生成四类目标镜头排序">
        <div className="research-visual-label">QUERY-CONDITIONED GOAL-MOE</div>
        <div className="moe-stage moe-movie-stage">
          <span>完整电影时间轴</span>
          <div className="moe-filmstrip" aria-hidden="true">
            <i /><i /><i /><i /><i />
          </div>
          <div className="moe-waveform" aria-hidden="true">
            {[28, 62, 40, 82, 52, 72, 34, 66, 46, 78, 38, 58].map((height, index) => (
              <b key={`${height}-${index}`} style={{ height: `${height}%` }} />
            ))}
          </div>
          <small>视觉 · ASR 对白 · 音频 · 时间位置</small>
        </div>
        <div className="moe-experts" aria-label="四类证据专家">
          {experts.map((expert, index) => (
            <div key={expert}>
              <span>{expert}专家</span>
              <i style={{ width: `${58 + index * 9}%` }} />
            </div>
          ))}
        </div>
        <div className="moe-router">
          <small>创作意图</small>
          <strong>动态路由</strong>
          <span>置信度 · 缺失掩码</span>
        </div>
        <div className="moe-goals" aria-label="目标化镜头排序">
          {goals.map((goal, index) => (
            <div key={goal}>
              <span>{goal}</span>
              <div aria-hidden="true"><i>{index + 1}</i><i>{index + 3}</i><i>{index + 2}</i></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.image) {
    return (
      <img
        src={compact ? project.cardImage || project.image : project.image}
        alt={`${project.title} 项目展示`}
        style={{
          objectPosition: compact
            ? project.cardImagePosition || project.imagePosition || "center"
            : project.detailImagePosition || project.imagePosition || "center",
          objectFit: compact
            ? project.cardImageFit || project.imageFit || "cover"
            : project.detailImageFit || project.imageFit || "cover",
        }}
      />
    );
  }

  if (project.visual === "music") {
    return (
      <div className={`research-visual music-visual ${compact ? "is-compact" : ""}`} aria-label="音乐与电影镜头跨模态对齐方法示意">
        <div className="research-visual-label">MUSIC-GUIDED TRAILER GENERATION</div>
        <div className="music-wave" aria-hidden="true">
          {[26, 48, 72, 38, 88, 56, 34, 78, 52, 92, 42, 64, 30, 74, 46, 84].map((height, index) => (
            <span key={`${height}-${index}`} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="film-sequence" aria-hidden="true">
          <span>01</span><span>02</span><span>03</span><span>04</span>
        </div>
        <div className="research-visual-copy">
          <strong>Coarse + Fine Music</strong>
          <span>Foreground / Background</span>
          <span>Cross-modal Alignment</span>
        </div>
      </div>
    );
  }

  if (project.visual === "river") {
    return (
      <div className={`research-visual river-visual ${compact ? "is-compact" : ""}`} aria-label="河道智能巡检小目标检测方法示意">
        <div className="research-visual-label">RIVER BASIN INSPECTION</div>
        <div className="river-bank river-bank-top" aria-hidden="true" />
        <div className="river-bank river-bank-bottom" aria-hidden="true" />
        <div className="detection-box box-a"><span>small object</span></div>
        <div className="detection-box box-b"><span>floating target</span></div>
        <div className="river-method">
          <strong>P2</strong>
          <span>FPN / PAN</span>
          <span>Multi-scale</span>
        </div>
      </div>
    );
  }

  const { Icon } = project;
  return (
    <div className={`project-placeholder accent-${project.accent}`} aria-hidden="true">
      <Icon size={70} strokeWidth={1.25} />
      <div className="placeholder-lines"><span /><span /><span /><span /></div>
    </div>
  );
}
