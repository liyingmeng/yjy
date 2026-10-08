import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  ExternalLink,
  Eye,
  EyeOff,
  LockKeyhole,
  LogOut,
  Mail,
  Menu,
  Phone,
  Save,
  Settings2,
  X,
} from "lucide-react";
import {
  experiences,
  media,
  metrics,
  profile,
  projects,
  strengths,
} from "./content";
import ProjectDetail from "./ProjectDetail";
import ProjectVisual from "./ProjectVisual";
import Ferrofluid from "./Ferrofluid";

const FERROFLUID_COLORS = ["#e60db9", "#ca15d1", "#5a15d6"];

const navItems = [
  { label: "首页", href: "#home" },
  { label: "经历", href: "#about" },
  { label: "项目", href: "#projects" },
  { label: "优势", href: "#strengths" },
];

const sectionIds = new Set(navItems.map(({ href }) => href.slice(1)));

function getHashRoute() {
  const hash = window.location.hash;
  const projectMatch = hash.match(/^#project\/(.+)$/);

  if (projectMatch) {
    return { projectSlug: projectMatch[1], sectionId: "" };
  }

  const sectionId = hash.slice(1);
  return {
    projectSlug: "",
    sectionId: sectionIds.has(sectionId) ? sectionId : "",
  };
}

function SiteBackground() {
  const [reducedMotion, setReducedMotion] = useState(() =>
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <div className="site-background">
      <Ferrofluid
        colors={FERROFLUID_COLORS}
        speed={0.28}
        scale={1.2}
        turbulence={1.05}
        fluidity={0.14}
        rimWidth={0.22}
        sharpness={2.8}
        shimmer={0.9}
        glow={2.3}
        flowDirection="right"
        opacity={1}
        mouseInteraction={!reducedMotion}
        mouseStrength={1.15}
        mouseRadius={0.3}
        mouseDampening={0.18}
        paused={reducedMotion}
        dpr={1.25}
      />
    </div>
  );
}

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Reveal({ children, className = "" }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  );
}

function Header({ onDeveloperOpen, developerMode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a className="wordmark" href="#home" aria-label="返回首页">
          <span>LYM</span>
          <strong>李莹蒙</strong>
        </a>

        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-contact" href="#contact">
            <Mail size={17} aria-hidden="true" />
            Contact
          </a>
          <button
            className={`developer-trigger ${developerMode ? "is-active" : ""}`}
            type="button"
            aria-label="打开开发者模式"
            title="Developer mode"
            onClick={onDeveloperOpen}
          >
            <Settings2 size={17} aria-hidden="true" />
          </button>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero({ data }) {
  return (
    <section className="hero" id="home">
      {media.heroVideo ? (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={media.heroPoster || undefined}
        >
          <source src={media.heroVideo} type="video/mp4" />
        </video>
      ) : null}

      <div className="hero-shade" />
      <div className="hero-content content-width">
        <p className="eyebrow"><span /> AI APPLICATION & MULTIMODAL RESEARCH</p>
        <div className="hero-grid">
          <div>
            <h1>{data.nameEn}</h1>
          </div>
          <div className="hero-side">
            <p>{data.heroSkills}</p>
            <div className="hero-actions">
              <a className="button button-accent" href="#projects">
                View projects <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-light" href="#contact">
                Reach out <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#about" aria-label="向下浏览个人经历">
        <span>继续浏览</span>
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}

function About({ data }) {
  return (
    <section className="section section-light" id="about">
      <div className="content-width">
        <Reveal className="section-heading about-heading">
          <p className="section-index">01 / PROFILE</p>
        </Reveal>

        <div className="about-layout">
          <Reveal className="portrait-frame">
            <img src="/yjy/assets/portrait.jpg" alt="李莹蒙证件照" />
          </Reveal>

          <Reveal className="about-copy">
            <p className="about-lead">{data.intro}</p>
            <div className="profile-links">
              <a href={`mailto:${data.email}`}>
                <Mail size={18} aria-hidden="true" />
                {data.email}
              </a>
              <a href={`tel:${data.phone}`}>
                <Phone size={18} aria-hidden="true" />
                {data.phone}
              </a>
            </div>
            <a className="text-link" href={profile.resume} target="_blank" rel="noreferrer">
              查看完整简历 <ExternalLink size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <Reveal className="metrics-row">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </Reveal>

        <div className="experience-list">
          {experiences.map((experience) => (
            <Reveal className="experience-row" key={experience.company}>
              <p className="experience-period">{experience.period}</p>
              <div>
                <h3>{experience.company}</h3>
                <p>{experience.team}</p>
              </div>
              <div>
                <h3>{experience.role}</h3>
                <p>{experience.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ content = [] }) {
  return (
    <section className="section section-projects" id="projects">
      <div className="content-width">
        <Reveal className="section-heading project-heading">
          <p className="section-index">02 / SELECTED WORK</p>
          <h2>实习及项目经历</h2>
          <p>从模型训练、数据闭环到 Agent 应用，关注每个方案的可验证结果。</p>
        </Reveal>

        <div className="project-list">
          {projects.map((project, index) => ({ ...project, ...(content[index] || {}) })).map((project) => (
            <Reveal key={project.index}>
              <a className="project-card" href={`#project/${project.slug}`} aria-label={`查看 ${project.title} 详情`}>
                <div
                  className="project-media"
                  style={project.cardAspectRatio ? { aspectRatio: project.cardAspectRatio, minHeight: 0 } : undefined}
                >
                  <ProjectVisual project={project} compact />
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span>{project.index}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-result">{project.result}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <span className="project-open">查看项目详情 <ArrowUpRight size={17} aria-hidden="true" /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strengths({ content = [] }) {
  return (
    <section className="section section-strengths" id="strengths">
      <div className="content-width">
        <Reveal className="section-heading strengths-heading">
          <p className="section-index">03 / CAPABILITIES</p>
          <h2>把复杂问题拆成可执行路径。</h2>
        </Reveal>

        <div className="strength-grid">
          {strengths.map((strength, index) => ({ ...strength, ...(content[index] || {}) })).map(({ title, description, Icon, tone }) => (
            <Reveal className={`strength-card tone-${tone}`} key={title}>
              <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ data }) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner content-width">
        <Reveal>
          <p className="section-index">04 / CONTACT</p>
          <h2>让 AI 能力真正进入业务现场。</h2>
          <p className="contact-copy">
            关注 AI 应用开发、多模态评测与 Agent 工程机会。
            <br />
            欢迎交流项目、实习与合作。
          </p>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${data.email}`}>
              <Mail size={18} aria-hidden="true" />
              发送邮件
            </a>
            <a className="button button-outline" href={profile.resume} download>
              <Download size={18} aria-hidden="true" />
              下载简历
            </a>
          </div>
        </Reveal>

        <div className="contact-footer">
          <span>{data.nameEn}</span>
          <a href={`tel:${data.phone}`}>{data.phone}</a>
          <span>© 2026</span>
        </div>
      </div>
    </section>
  );
}

const editableDefaults = {
  ...profile,
  heroSkills: "AI Application Development\nMultimodal Vision Algorithms\nAgent, RAG & Evaluation",
  projectContent: projects.map(({ title, category, description, result }) => ({ title, category, description, result })),
  strengthContent: strengths.map(({ title, description }) => ({ title, description })),
};

function DeveloperPanel({ open, authenticated, data, onClose, onLogin, onSave, onLogout }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [draft, setDraft] = useState(data);

  useEffect(() => setDraft(data), [data, open]);
  if (!open) return null;

  const submitLogin = (event) => {
    event.preventDefault();
    if (onLogin(password)) {
      setPassword("");
      setError("");
    } else {
      setError("密码不正确，请重新输入。");
    }
  };

  return (
    <div className="developer-layer" role="dialog" aria-modal="true" aria-label="开发者模式">
      <button className="developer-backdrop" type="button" onClick={onClose} aria-label="关闭" />
      <aside className="developer-panel">
        <div className="developer-panel-head">
          <div><span>PORTFOLIO CMS</span><h2>{authenticated ? "编辑网站内容" : "开发者模式"}</h2></div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="关闭面板"><X size={20} /></button>
        </div>

        {!authenticated ? (
          <form className="developer-login" onSubmit={submitLogin}>
            <LockKeyhole size={30} strokeWidth={1.5} />
            <p>输入开发者密码后即可编辑首页与个人资料。</p>
            <label>访问密码</label>
            <div className="password-field">
              <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} autoFocus />
              <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label="显示或隐藏密码">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {error ? <p className="developer-error">{error}</p> : null}
            <button className="developer-primary" type="submit">进入编辑模式</button>
          </form>
        ) : (
          <form className="developer-form" onSubmit={(event) => { event.preventDefault(); onSave(draft); }}>
            <label>英文姓名<input value={draft.nameEn} onChange={(e) => setDraft({ ...draft, nameEn: e.target.value })} /></label>
            <label>首页能力描述<textarea rows="4" value={draft.heroSkills} onChange={(e) => setDraft({ ...draft, heroSkills: e.target.value })} /></label>
            <label>个人介绍<textarea rows="6" value={draft.intro} onChange={(e) => setDraft({ ...draft, intro: e.target.value })} /></label>
            <label>邮箱<input type="email" value={draft.email} onChange={(e) => setDraft({ ...draft, email: e.target.value })} /></label>
            <label>电话<input value={draft.phone} onChange={(e) => setDraft({ ...draft, phone: e.target.value })} /></label>
            <div className="developer-group-title">实习及项目经历</div>
            {draft.projectContent.map((project, index) => (
              <div className="developer-repeat" key={`project-${index}`}>
                <strong>项目 {index + 1}</strong>
                <label>标题<input value={project.title} onChange={(e) => setDraft({ ...draft, projectContent: draft.projectContent.map((item, itemIndex) => itemIndex === index ? { ...item, title: e.target.value } : item) })} /></label>
                <label>类别<input value={project.category} onChange={(e) => setDraft({ ...draft, projectContent: draft.projectContent.map((item, itemIndex) => itemIndex === index ? { ...item, category: e.target.value } : item) })} /></label>
                <label>描述<textarea rows="4" value={project.description} onChange={(e) => setDraft({ ...draft, projectContent: draft.projectContent.map((item, itemIndex) => itemIndex === index ? { ...item, description: e.target.value } : item) })} /></label>
                <label>结果<textarea rows="2" value={project.result} onChange={(e) => setDraft({ ...draft, projectContent: draft.projectContent.map((item, itemIndex) => itemIndex === index ? { ...item, result: e.target.value } : item) })} /></label>
              </div>
            ))}
            <div className="developer-group-title">个人优势</div>
            {draft.strengthContent.map((strength, index) => (
              <div className="developer-repeat" key={`strength-${index}`}>
                <label>能力名称<input value={strength.title} onChange={(e) => setDraft({ ...draft, strengthContent: draft.strengthContent.map((item, itemIndex) => itemIndex === index ? { ...item, title: e.target.value } : item) })} /></label>
                <label>能力描述<textarea rows="3" value={strength.description} onChange={(e) => setDraft({ ...draft, strengthContent: draft.strengthContent.map((item, itemIndex) => itemIndex === index ? { ...item, description: e.target.value } : item) })} /></label>
              </div>
            ))}
            <div className="developer-form-actions">
              <button className="developer-primary" type="submit"><Save size={17} />保存修改</button>
              <button className="developer-secondary" type="button" onClick={onLogout}><LogOut size={17} />退出模式</button>
            </div>
          </form>
        )}
      </aside>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState(getHashRoute);
  const [developerOpen, setDeveloperOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [editableData, setEditableData] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("portfolio-content") || "{}");
      return {
        ...editableDefaults,
        ...saved,
        projectContent: editableDefaults.projectContent.map((item, index) => ({
          ...item,
          ...(Array.isArray(saved.projectContent) ? saved.projectContent[index] : {}),
        })),
        strengthContent: editableDefaults.strengthContent.map((item, index) => ({
          ...item,
          ...(Array.isArray(saved.strengthContent) ? saved.strengthContent[index] : {}),
        })),
      };
    } catch {
      return editableDefaults;
    }
  });

  const login = (password) => {
    const valid = password === "021208";
    if (valid) setAuthenticated(true);
    return valid;
  };

  const save = (nextData) => {
    setEditableData(nextData);
    localStorage.setItem("portfolio-content", JSON.stringify(nextData));
    setDeveloperOpen(false);
  };

  useEffect(() => {
    const handleHashChange = () => setRoute(getHashRoute());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (route.projectSlug) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return undefined;
    }

    if (!route.sectionId) return undefined;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(route.sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [route]);

  const selectedProject = projects.find((project) => project.slug === route.projectSlug);
  const selectedIndex = selectedProject ? projects.indexOf(selectedProject) : -1;
  const mergedProject = selectedProject
    ? { ...selectedProject, ...(editableData.projectContent[selectedIndex] || {}) }
    : null;

  return (
    <>
      <SiteBackground />
      <Header onDeveloperOpen={() => setDeveloperOpen(true)} developerMode={authenticated} />
      {mergedProject ? (
        <ProjectDetail project={mergedProject} />
      ) : (
        <main>
          <Hero data={editableData} />
          <About data={editableData} />
          <Projects content={editableData.projectContent} />
          <Strengths content={editableData.strengthContent} />
          <Contact data={editableData} />
        </main>
      )}
      <DeveloperPanel
        open={developerOpen}
        authenticated={authenticated}
        data={editableData}
        onClose={() => setDeveloperOpen(false)}
        onLogin={login}
        onSave={save}
        onLogout={() => { setAuthenticated(false); setDeveloperOpen(false); }}
      />
    </>
  );
}
