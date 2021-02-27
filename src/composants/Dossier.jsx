import './Dossier.scss';
import SortIcon from '@material-ui/icons/Sort';
import IconPlus from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier">
      <div className="couverture">
        <SortIcon className="deplacer"></SortIcon>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>modifié : {dateModif}</p>
        <IconButton>
          <IconPlus className ="IconPlus"/>
        </IconButton>
      </div>
     
    </article>
  );
}