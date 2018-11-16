import Head from 'next/head'

import './styles/styles.less';
import './styles/glitch.less';
import './styles/text.less';

export default ({title = '', first, second, third = '', children}) => (
    <div id="content">
        <Head>
            <title>{title.length > 0 ? `${title} | Tassu` : 'Tassu'}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <div className="mid">
            <div className="text">
                <h1>
                    <span>{first}</span>
                    <span>{first}</span>
                    <span>{first}</span>
                </h1>
                <h1 className="second">
                    <span>{second}</span>
                    <span>{second}</span>
                    <span>{second}</span>
                </h1>
                {third.length > 0 && (
                    <h1 className="third">
                        <span>{third}</span>
                        <span>{third}</span>
                        <span>{third}</span>
                    </h1>
                )}
            </div>
            {children}
        </div>
    </div>
);
