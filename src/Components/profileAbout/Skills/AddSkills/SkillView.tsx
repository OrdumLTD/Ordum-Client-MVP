"use client";

type Props = {
    name: string,
    level: string
}

const SkillView: React.FC<Props> = (props) => {

  return (
    <div>
      <span>Name: {props.name}</span>
      <span>Level: {props.level}</span>
    </div>
  );
};

export default SkillView
