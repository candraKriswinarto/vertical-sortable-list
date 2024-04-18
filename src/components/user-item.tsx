import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FC } from 'react';

interface UserItemProps {
  user: {
    id: number;
    name: string;
    email: string;
  };
}
const UserItem: FC<UserItemProps> = (props) => {
  const { id, name, email } = props.user;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className='bg-blue-200 p-4 rounded shadow-md flex justify-between'
    >
      <div>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <p className='text-gray-600'>{email}</p>
      </div>
      {/* <button {...attributes} {...listeners} className='cursor-move'>
        Drag
      </button> */}
    </div>
  );
};

export default UserItem;
