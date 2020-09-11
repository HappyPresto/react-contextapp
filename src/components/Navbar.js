import React, { Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
    // первый вариант получения данных из провайдера
    render() { 
        return ( 
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themContext) => {
                    const {isAuthentificated, toggleAuth } = authContext;
                    const {isLightTheme, light, dark} = themContext;
                    const theme = isLightTheme ? light : dark;
                    console.log(isAuthentificated);
                    return (
                        <nav style={{background: theme.ui, color: theme.syntax}}>
                            <h1>Context App</h1>
                            <div onClick={toggleAuth}>
                                {isAuthentificated ? 'Logged in' : 'Logged out'}
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}
                </ThemeContext.Consumer>
            )}
                
            </AuthContext.Consumer>
        );
    }
}
 
export default Navbar;