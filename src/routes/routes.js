import EmpDash from '../components/EmpDash.vue';
import ManagerDash from '../components/ManagerDash.vue';
import HrAdminDash from '../components/HrAdminDash.vue';
import Dashboard from '../components/Dashboard.vue';

export const routes = [
	{path: '/', component: Dashboard , children:[
		{path: 'employee', component: EmpDash},
		{path: 'manager', component: ManagerDash},
		{path: 'hradmin', component: HrAdminDash}
		]
	}
];