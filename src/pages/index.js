import { MenuComponent } from '../components/Menu';
import { HomeTemplate } from '../template/home';

export default function Home() {
  return (
    <div className="container">
      <MenuComponent />
      <HomeTemplate />
    </div>
  );
}
