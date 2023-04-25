import { Button } from '../components/Button';
import '../styles/sidebar.scss';

interface Tprops {
  genres: any;
  genreId: any;
  selected: any;
}

export function SideBar(props: Tprops) {
  // Complete aqui

  function handleClickButton(id: number) {
    props.selected(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map((genre: any) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={props.genreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}