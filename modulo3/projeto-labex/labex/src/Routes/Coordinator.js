


export const goToLista = (navigate) => {
    navigate("/listas");
  };

  export const goToLogin = (navigate) => {
    navigate("login");
  };

  export const goBack = (navigate) => {
    navigate(-1);
  };

  export const goToForm = (navigate) => {
    navigate("inscricao");
  };

  export const goToDetailPage = (navigate, id) => {
    navigate(`/tripdetails/${id}`)
}

  export const goToAdminHome = (navigate) => {
    navigate("/admin")
  }

  export const goHome = (navigate) => {
    navigate("/")
  }