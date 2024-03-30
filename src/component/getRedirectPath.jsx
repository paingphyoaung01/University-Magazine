export function getRedirectPath() {
  const role = localStorage.getItem("userRole");
    switch (role) {
      case "ADMIN":
        return "/admin";
      case "STUDENT":
        return "/student/home";
      case "COORDINATOR":
        return "/marketingCoordinator";
      case "MANAGER":
        return "/marketingManager";
      default:
        return "/";
    }
  }