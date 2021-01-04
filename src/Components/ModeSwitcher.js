const ModeSwitcher = props =>{
    const buttonText = props.currentMode === 'dark_mode' ? 'Light mode' : 'Dark mode';

    return(
        <button className="ModeSwitcher" onClick={props.switchModeHandler}>{buttonText}</button>
    );
}

export default ModeSwitcher;