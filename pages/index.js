import Layout from '../assets/layout';

export default () => (
    <Layout first="tas" second="su">
        <div className="mono">
            <div>
                <a href="https://blog.tassu.me">blog</a>
                <style jsx>
                    {`
                    * {
                        font-size: 3rem;
                    }
                    `}
                </style>
            </div>
            <div>
                <a href="https://github.com/supertassu">github</a> <a href="https://keybase.io/tassu">keybase</a>
            </div>
        </div>
    </Layout>
);
