
import { SESSION, SET_STORAGE } from "../utils/constants";
import _ from "lodash";

export const setLocalStorage = (key, varToSet) => (localStorage.setItem(key, btoa(varToSet)))

export const getLocalStorage = (key) => {
  const getStorage = localStorage.getItem(key)
  try {
    return getStorage ? atob(getStorage) : false
  } catch (e) {
    return false
  }
}
export const unsetLocalStorage = () => (localStorage.clear())
export const removeLocalStorage = (key) => localStorage.removeItem(key);

export const getLocalStorageMenu = (key) => {
  const getStorage = localStorage.getItem(key);
  try {
    return getStorage ? atob(getStorage) : "";
  } catch (e) {
    return "";
  }
};

export const addEllipsis = (string, sliceUpTo) => {
  if (string && string.length >= 30) {
    return <span>{string.substring(0, sliceUpTo) + "..."}</span>;
  } else {
    return <span>{string}</span>;
  }
};

export const setDynamicPasswordRegex = (min, max) => {
  const variable = `(?=^.{${min || 7},${max || 14}}$)`
  const exp = `${variable}(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$`
  const regex = new RegExp(exp)
  return regex
}

export const handleAuthFail = (error) => {
  if (error === SESSION.AUTH_FAILED) {
    window.location.href = "/authorization-failed";
  }
};

export const getUserPermissions = (slug) => {
  const getUserMenuDetails = getLocalStorageMenu(SET_STORAGE.USER_MENU_DETAILS);
  if (getUserMenuDetails && getUserMenuDetails) {
    const getMenuList = JSON.parse(getUserMenuDetails);
    if (getMenuList && getMenuList.length > 0) {
      let val = [];
      _.forEach(getMenuList, (parent) => {
        const currentSlug = `/${parent.slug}`;
        if (parent && parent.submenu && parent.submenu.length > 0) {
          _.forEach(parent.submenu, (child) => {
            const currentSlug = `/${child.slug}`;
            if (currentSlug === slug) {
              const permissions =
                child.permissions && child.permissions.length > 0
                  ? child.permissions
                  : [];
              val = permissions;
            } else if (child && child.submenu && child.submenu.length > 0) {
              _.forEach(child.submenu, (grand) => {
                const currentSlug = `/${grand.slug}`;
                if (currentSlug === slug) {
                  const permissions =
                    grand.permissions && grand.permissions.length > 0
                      ? grand.permissions
                      : [];
                  val = permissions;
                }
              });
            }
          });
        } else if (currentSlug === slug) {
          const permissions =
            parent.permissions && parent.permissions.length > 0
              ? parent.permissions
              : [];
          val = permissions;
        }
      });
      return val;
    }
  } else {
    window.location.href = "/session-expired";
    unsetLocalStorage();
  }
};


const checkIfParentExist = (tempSlug, arr) => {
  switch (tempSlug) {
    case "/main-dashboard":
      arr.push(
        "/main-dashboard"
      );
      return;
    case "/home":
      arr.push(
        "/home"
      );
      return;
    case "/risk-management":
      arr.push(
        "/risk-management",
        "/risk-summary/update/:id",
        "/merchant-login"
      );
      return;
    case "/transaction":
      arr.push(
        "/transaction",
        "/transaction-dashboard/update/:id",
        "/transaction-search",
        "/add-transaction"
      );
      return;
    case "/aml-queue":
      arr.push(
        "/aml-queue",
        "/aml-dashboard/update/:id"
      );
      return;
    case "/KYC":
      arr.push(
        "/KYC"
      );
      return;
    case "/create":
      arr.push("/create");
      return;
    case "/manage-queues":
      arr.push("/manage-queues", "queues/update/:id");
      return;
    case "/rules":
      arr.push("/rules", "/rulesupdate/form/update/:id");
      return;
    case "/blacklist":
      arr.push(
        "/blacklist"
      );
      return;
    case "/white-list":
      arr.push(
        "/white-list"
      );
      return;
    case "/fraud-patterns":
      arr.push(
        "/fraud-patterns"
      );
      return;
    case "/reports":
      arr.push(
        "/reports"
      );
      return;
    case "/queue-reports":
      arr.push(
        "/queue-reports"
        );
      return;
    case "/filters":
      arr.push(
        "/filters",
      );
      return;
    case "/admin":
      arr.push(
        "/admin"
      );
      return;
      case "/web-risk":
      arr.push(
        "/web-risk",
        "/client-onboarding/update/:id"
      );
      return;case '/prevention-alerts':
      arr.push(
        '/prevention-alerts',
        '/prevention-alerts/update/:id',
        '/prevention-alerts'
      )
      return
    case '/Clients':
      arr.push(
        '/client-management',
        '/client-onboarding',
        '/client-onboarding/update/:id',
        '/client-onboarding/update/:id/add-template',
        '/client-onboarding/update/:id/update-template/:id',
      )
      return
    // case '/issuer-bank-inquiries':
    //   arr.push('/issuer-bank-inquiries', '/issuer-bank-inquiries/sdk')
    //   return
    // case '/issuer-bank-alerts':
    //   arr.push('/issuer-bank-alerts', '/issuer-bank-alerts/sdk')
    //   return
    // case '/manage-crm':
    //   arr.push('/manage-crm', '/manage-crm/add', '/manage-crm/update/:id')
    //   return
    case '/user-components':
      arr.push(
        '/user-components',
        '/add-user-components',
        '/update-user-components/:id'
      )
      return
    case '/user-management':
      arr.push(
        '/user-management',
        '/user-management/update-user/:id',
        '/assign-partner/:id',
        '/assign-client/:id'
      )
    default:
      arr.push(tempSlug);
      return;
  }
};


export const getUserMatrixSlugs = () => {
  const getUserMenuDetails = getLocalStorageMenu(SET_STORAGE.USER_MENU_DETAILS);
  if (getUserMenuDetails && getUserMenuDetails) {
    const getMenuList = JSON.parse(getUserMenuDetails);
    if (getMenuList && getMenuList.length > 0) {
      let slugs = ["/risk-management', '/user-profile', '/user-change-password"];
      _.forEach(getMenuList, (parent) => {
        if (parent.submenu && parent.submenu.length > 0) {
          _.forEach(parent.submenu, (child) => {
            if (child.submenu && child.submenu.length > 0) {
              _.forEach(child.submenu, (grand) => {
                if (grand.slug) {
                  const prepSlug = grand.slug
                    .replace(/\s+/g, "-")
                    .toLowerCase();
                  checkIfParentExist(`/${prepSlug}`, slugs);
                }
              });
            } else {
              const prepSlug = child.slug.replace(/\s+/g, "-").toLowerCase();
              checkIfParentExist(`/${prepSlug}`, slugs);
            }
          });
        } else {
          const prepSlug = parent.slug.replace(/\s+/g, "-").toLowerCase();
          checkIfParentExist(`/${prepSlug}`, slugs);
        }
      });
      return slugs;
    }
  }
};