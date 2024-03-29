import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import '../styles/sidebar.scss';
import { api } from '../services/api';

interface SideBarProps {
  onHandleClickButton: (id: number) => void;
  selectedGenreId: number;
}

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({ onHandleClickButton, selectedGenreId}: SideBarProps) {
  // Complete aqui
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
  
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map((genre: any) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={ () => onHandleClickButton(genre.id) }
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}