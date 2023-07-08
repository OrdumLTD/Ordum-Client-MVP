type Props = {
  name: String;
  description: string;
  taskType: string;
  deliverableLink?: string;
  deliverableName?: string;
  devilerableDeadline?: string;
  className?: string;
};

const Milestone: React.FC<Props> = (props) => {
  return (
    <div>
      <div>Task Name: {props.name}</div>
      <div>Milestone description: {props.description}</div>
      <div>Task type</div>
      <div>List of team members working on task</div>
    </div>
  );
};

export default Milestone;
