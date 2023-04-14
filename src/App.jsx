import img1 from './asset/a1.jpeg';
import img2 from './asset/b8.jpeg';
import img3 from './asset/b10.jpeg';

function App() {
  return (
    <div className="container mb-3">
      <nav className="navbar navbar-expand-lg bg-dark mt-3 rounded">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#http">
            Adesoye Y.A
          </a>
          <button
            className="navbar-toggler bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="col mb-3lapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#http"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#http">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#http"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#http">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#http">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#http">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white-50" href="#http">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success bg-light text-dark"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <button
        className="btn btn-primary mt-3 "
        style={{ width: '6rem' }}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        Oncanvas
      </button>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Offcanvas allow body scrolling
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col mb-3">
          <div className="card" style={{ width: '18rem' }}>
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card" style={{ width: '18rem' }}>
            <img src={img2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card" style={{ width: '18rem' }}>
            <img src={img3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <form className="row gy-2 gx-3 align-items-center">
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInput">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="autoSizingInput"
            placeholder="Jane Doe"
          />
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">
            Username
          </label>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input
              type="text"
              className="form-control"
              id="autoSizingInputGroup"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingSelect">
            Preference
          </label>
          <select className="form-select" id="autoSizingSelect">
            <option defaultValue>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </form>
      <div className="col-auto">
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="autoSizingCheck"
          />
          <label
            className="form-check-label text-light"
            htmlFor="autoSizingCheck"
          >
            Remember me
          </label>
          <button type="submit" className="btn btn-primary ms-5">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
