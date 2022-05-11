const header = document.createElement('header');
header.classList.add('p-4');
const boxBrand = document.createElement('div');
const homeLink = document.createElement('a');
const pageTitle = document.createElement('h1');
const iconWallet = document.createElement('i');
iconWallet.classList.add('fas', 'fa-solid', 'fa-wallet', 'me-3');

const boxNav = document.createElement ('div');
const listNav = document.createElement('ul');
const balance = document.createElement('li');
const categories = document.createElement('li');
const reports = document.createElement('li');

const aBalance = document.createElement('a');
const aCategory = document.createElement('a');
const aReport = document.createElement('a');
const iconBalance = document.createElement('i');
const iconCategory = document.createElement('i');
const iconReport = document.createElement('i');

aBalance.appendChild(iconBalance);
aCategory.appendChild(iconCategory);
aReport.appendChild(iconReport);
aBalance.appendChild(document.createTextNode('Balance'));
aCategory.appendChild(document.createTextNode('Categoría'));
aReport.appendChild(document.createTextNode('Reportes'));

listNav.appendChild(balance);
listNav.appendChild(categories);
listNav.appendChild(reports);
boxNav.appendChild(listNav);
balance.appendChild(aBalance)
categories.appendChild(aCategory);
reports.appendChild(aReport);

pageTitle.appendChild(iconWallet);
pageTitle.appendChild(document.createTextNode('AhorrADAs'));
homeLink.appendChild(pageTitle);
boxBrand.appendChild(homeLink);
header.appendChild(boxBrand);
header.appendChild(boxNav);
document.body.appendChild(header);

header.classList.add('navbar', 'bg-success', 'bg-gradient', 'text-white', 'container-fluid', 'position-fixed');
listNav.classList.add('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0', 'list-group-horizontal');
reports.classList.add('nav-item', 'ms-3');
categories.classList.add('nav-item', 'ms-3');
balance.classList.add('nav-item', 'ms-3');

iconBalance.classList.add('fas','fa-solid','fa-chart-column','me-1');
iconCategory.classList.add('fas','fa-solid','fa-chart-column','me-1');
iconReport.classList.add('fas','fa-solid','fa-chart-column','me-1');

