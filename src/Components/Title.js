
import '../Style/style.css'
import '../Style/Title.css'


function Title(props) {

  return (
   <section  className='Title'>
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
   </section>
  );
}

export default Title;