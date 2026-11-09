import { Code2 } from "lucide-react";

export default function SkillCard({ name, level }) {
  return (
    <article className="skill-card">
      <span className="skill-icon"><Code2 size={20} /></span>
      <div>
        <h3>{name}</h3>
        <p>{level}</p>
      </div>
    </article>
  );
}