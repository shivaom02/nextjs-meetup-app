import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

export default function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
    );
}