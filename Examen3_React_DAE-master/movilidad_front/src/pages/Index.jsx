import { Link } from 'react-router-dom';

function Index() {
  return (
    <>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
            style={{
              opacity: '0.8',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              margin: '10px',
              fontFamily: 'Arial',
            }}
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading" style={{ color: 'white' }}>
                  MODULOS
                </div>
                <Link
                  to="/"
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                  style={{ color: 'white' }}
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Usuarios
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </Link>
                <Link
                  to="/PagosPage"
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                  style={{ color: 'white' }}
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Pagos
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </Link>
                <Link
                  to="/FormasPagos"
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                  style={{ color: 'white' }}
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Método de Pagos
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="sb-sidenav-footer"
              style={{ color: 'white', margin: '10px' }}
            >
              <div className="small">Logged in as:</div>
              ANDREA
            </div>
          </nav>
        </div>
        <div
          id="layoutSidenav_content"
          style={{
            margin: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
          }}
        >
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">
                  Los GARDIANES DE LA GALAXIA &copy; Your Website 2022
                </div>
                <div>
                  <a href="#" style={{ color: 'black' }}>Privacy Policy</a>
                  &middot;
                  <a href="#" style={{ color: 'black' }}>Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Index;
