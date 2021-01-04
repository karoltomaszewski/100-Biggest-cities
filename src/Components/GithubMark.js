import Mark from '../github_mark/GithubMark.png';
import MarkLight from '../github_mark/GithubMarkLight.png';

const GithubMark = props => {
    if(props.mode === 'light_mode'){
        return <div className="GithubMark"><a href="https://github.com/karoltomaszewski/100-Biggest-cities"><img src={Mark} alt="Github"></img></a></div>
    }else{
        return <div className="GithubMark"><a href="https://github.com/karoltomaszewski/100-Biggest-cities"><img src={MarkLight} alt="Github"></img></a></div>       
    }
}

export default GithubMark;