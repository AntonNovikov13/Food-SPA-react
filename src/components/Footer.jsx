function Footer() {
    return (
        <footer className='page-footer amber lighten-2'>
            <div className='footer-copyright'>
                <div className='container black-text text-darken-2'>
                    © {new Date().getFullYear()} Copyright Text
                    <a className='black-text text-darken-2 right' href='#!'>
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
