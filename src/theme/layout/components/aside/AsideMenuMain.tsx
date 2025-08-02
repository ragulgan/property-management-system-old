/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { KTSVG } from '../../../helpers';
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub';
import { AsideMenuItem } from './AsideMenuItem';
import { SESSION } from '../../../../utils/constants'
import { getLocalStorage } from '../../../../utils/helper'

export function AsideMenuMain() {
  const Roles = JSON.parse(localStorage.getItem('roles')!)
  const Role_type = getLocalStorage(SESSION.ROLE)

  return (
    <>
      {Roles && Roles.dashboard && Roles.dashboard.visible ?
      <AsideMenuItem
        to="/dashboard"
        title="Dashboard"
        fontIcon="bi-archive"
        icon="/media/avatars/asideMenu/dash001.svg"
        /> : null}
      {Roles && Roles.user && Roles.user.visible ?
       <AsideMenuItem
        to="/users-management"
        title="Staff"
        fontIcon="bi-archive"
        icon="/media/avatars/asideMenu/dash002.svg"
        /> : null}
      {Roles && Roles.landlords && Roles.landlords.visible ?
       <AsideMenuItem
        to="/land-lords"
        title="Landlords"
        fontIcon="bi-archive"
        icon="/media/avatars/asideMenu/dash003.svg"
      /> : null }
      
      {Roles && Roles.myProperty && Roles.myProperty.visible || Roles && Roles.transactions && Roles.transactions.visible ?
      <AsideMenuItemWithSub
        to='#'
        icon='/media/avatars/asideMenu/dash004.svg'
        title='Properties'
        fontIcon='bi-layers'
        >
          {Roles && Roles.myProperty && Roles.myProperty.visible ?
            <AsideMenuItem
              to="/properties"
              title="My Property"
              fontIcon="bi-archive"
              icon="/media/icons/duotune/general/gen011.svg"
            /> : null}
          {Roles && Roles.transactions && Roles.transactions.visible ?
            <AsideMenuItem
              to="/transaction"
              title="Transactions"
              fontIcon="bi-archive"
              icon="/media/icons/duotune/general/gen015.svg"
            /> : null}
        </AsideMenuItemWithSub> : null}
      {Roles && Roles.leases && Roles.leases.visible || Roles && Roles.payments && Roles.payments.visible ?
        <AsideMenuItemWithSub
          to='#'
          icon='/media/avatars/asideMenu/dash005.svg'
          title='Leases'
          fontIcon='bi-layers'
        >
          {Roles && Roles.leases && Roles.leases.visible ?
            <AsideMenuItem
              to="/leases"
              title="My Leases"
              fontIcon="bi-archive"
              icon="/media/icons/duotune/general/gen011.svg"
            /> : null} 
          {Roles && Roles.payments && Roles.payments.visible ?
            <AsideMenuItem
              to="/payments"
              title="Payments"
              fontIcon="bi-archive"
              icon="/media/icons/duotune/general/gen015.svg"
            /> : null}
        </AsideMenuItemWithSub> : null}
        {/* {Roles && Roles.landlords && Roles.landlords.visible ? */}
       <AsideMenuItem
        to="/Tenants"
        title="Tenants"
        fontIcon="bi-archive"
        icon="/media/avatars/asideMenu/dash003.svg"
      /> 
      {/* : null } */}
      {Role_type === 'superadmin' ?
        <AsideMenuItem
          to="/settings"
          title="Settings"
          fontIcon="bi-archive"
          icon="/media/avatars/asideMenu/dash006.svg"
        /> : null}
    </>
  );
}
