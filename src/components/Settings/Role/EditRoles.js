import _ from 'lodash'

export const setRolesEditData = (data) => {
  if (!_.isEmpty(data)) {
    return {
      roleName: data && data.roleName ? data.roleName : '',
      roleStatus: data && data.roleStatus ? data.roleStatus : '',
      // menus: data && data.menus ? data.menus : ''
    }
  }
}