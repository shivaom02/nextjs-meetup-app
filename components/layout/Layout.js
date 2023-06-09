import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

export default function Layout(props) {
    retrun (
        <div>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}