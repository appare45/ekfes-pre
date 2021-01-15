import { Style } from 'util';

export default function Warning() {
  const style: object = {
    width: '100vw',
    position: 'fixed',
    top: '0',
    background: 'red',
    padding: '10px',
    'text-align': 'center',
    'font-family': `'Yu Gothic', 'YuGothic', 'Yu Gothic', '游明朝体'`,
    'font-weight': '600',
  };
  return (
    <div style={style}>
      このサイトはフィクションです。実在の人物や団体などとは関係ありません。また、全著作権は制作者に帰属します。
    </div>
  );
}
