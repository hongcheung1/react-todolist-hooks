import {Link} from 'react-router-dom';

export default function Home() {
  return <div>
    <h2>Welcome to Home!</h2>
    <div>
      <Link to='/teams'><button>Teams</button></Link>
      <Link to='/members'><button>Members</button></Link>
    </div>
  </div>
}