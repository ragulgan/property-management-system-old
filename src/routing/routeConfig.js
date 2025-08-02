const routeConfig = {
    // dashboard
    dashboard: '/dashboard',
    
    // auth
    auth: '/',
    forgotPassword: '/forgotPassword',
    registration: '/registration',
    admin: '/admin',

    // test
    Test: '/test',
    Trainer: '/trainer',
    user: '/users-management',
    addUser: '/add-user',
    editUser: '/edit-user/:id',
    landLord: '/land-lords',

    //customer
    Customer: '/role-customer',
    Addcustomer: '/add-customers',

    // property
    Property: '/properties',
    AddProperty: '/add-property',
    EditProperty: '/edit-property/:id',

    // transaction
    Transactions: '/transaction',

    //payment
    payments: '/payments',

    //setting
    Settings: '/settings',
    SettingsRole: '/role-setting',

    //employee
    Employee: 'role-employee',
    
    // leases
    leases:'/leases',
    AddLeases:'/add-leases',
    editLease: '/edit-leases/:id',

    // tenants
    Tenants:'/tenants',
    AddTenants:'/add-tenants',
    editTenant: '/edit-tenants/:id',
}

export default routeConfig