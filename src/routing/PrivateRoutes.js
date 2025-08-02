import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { FallbackView } from '../theme/partials'
import routeConfig from './routeConfig'

export function PrivateRoutes() {

  const User = lazy(() => import('../containers/Trainer/index'))
  const editUser = lazy(() => import('../containers/Trainer/index'))
  const AddUser = lazy(() => import('../containers/Trainer/index'))
  const Customer = lazy(() => import('../containers/Role/index'))
  const AddCustomers = lazy(() => import('../containers/Role/index'))
  const Employee = lazy(() => import('../containers/Employee/index'))
  const LandLords = lazy(() => import('../containers/LandLords/index'))
  const Property = lazy(() => import('../containers/Property/index'))
  const AddProperty = lazy(() => import('../containers/Property/index'))
  const Transactions = lazy(() => import('../containers/Transactions/index'))
  const Payments = lazy(() => import('../containers/Payments/index'))
  const Leases = lazy(() => import('../containers/leases/index'))
  const AddLeases = lazy(() => import('../containers/leases/index'))
  const Settings = lazy(() => import('../containers/Settings/index'))
  const roleSetting = lazy(() => import('../containers/Settings/index'))
  const dashboard = lazy(() => import('../containers/dashboard/index'))
  const Tenant = lazy(() => import('../containers/Tenants/index'))
  const AddTenant = lazy(() => import('../containers/Tenants/index'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path={routeConfig.Tenants} component={Tenant} />
        <Route path={routeConfig.editTenant} component={AddTenant} />
        <Route path={routeConfig.AddTenants} component={AddTenant} />
        <Route path={routeConfig.dashboard} component={dashboard} />
        <Route path={routeConfig.user} component={User} />
        <Route path={routeConfig.editUser} component={AddUser} />
        <Route path={routeConfig.addUser} component={AddUser} />
        <Route path={routeConfig.Customer} component={Customer} />
        <Route path={routeConfig.Addcustomer} component={AddCustomers} />
        <Route path={routeConfig.Employee} component={Employee} />
        <Route path={routeConfig.landLord} component={LandLords} />
        <Route path={routeConfig.Property} component={Property} />
        <Route path={routeConfig.AddProperty} component={AddProperty} />
        <Route path={routeConfig.EditProperty} component={AddProperty} />
        <Route path={routeConfig.Transactions} component={Transactions} />
        <Route path={routeConfig.payments} component={Payments} />
        <Route path={routeConfig.leases} component={Leases} />
        <Route path={routeConfig.AddLeases} component={AddLeases} />
        <Route path={routeConfig.editLease} component={AddLeases} />
        <Route path={routeConfig.Settings} component={Settings} />
        <Route path={routeConfig.roleSetting} component={roleSetting} />
      </Switch>
    </Suspense>
  )
}