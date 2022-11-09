const db = {
  invoices: [
    {
      id: '172987',
      recipient: 'Jacob Mercer',
      account: 20138714,
      total: 8000,
      date: {
        created: '2011-10-05T14:48:00.000Z',
        due: '2011-10-12T00:00:00.000Z',
      },
    },
    {
      id: '173851',
      recipient: 'Adrian Cross',
      account: 30986127,
      total: 11000,
      date: {
        created: '2017-07-01T12:18:00.000Z',
        due: '2017-08-14T00:00:00.000Z',
      },
    },
    {
      id: '186541',
      recipient: 'Solomon Fokes',
      account: 78615230,
      total: 82000,
      date: {
        created: '2019-03-17T10:12:00.000Z',
        due: '2019-04-02T00:00:00.000Z',
      },
    },
    {
      id: '185744',
      recipient: 'Artemis Tau',
      account: 82719051,
      total: 17000,
      date: {
        created: '2022-09-28T10:57:00.000Z',
        due: '2022-11-02T00:00:00.000Z',
      },
    },
  ],
  customers: [
    { id: 1, name: 'Misha hopkons' },
    { id: 2, name: 'Фродо Бегинс' },
    { id: 3, name: 'етмен' },
    { id: 4, name: 'Супер мен' },
    { id: 5, name: 'ТАнос' },
    { id: 6, name: 'Ствиен Кинг' },
    {id:7, name: 'ДЖ Франзен'},
    { id: 8, name: 'Евгенидис' },
    { id: 9, name: 'Карабидис' },
    {id:10, name: 'Шевченко'},
    {id:11, name: 'Ярмоленко'},
    {id:12, name: 'Хендерсон'},
    { id: 13, name: 'Король дождя' },
    {id:14, name: 'івфіаі'},
    {id:15, name: 'фпафвіафі'},
    { id: 16, name: 'Трент' },
    { id: 17, name: 'Александр' },
    { id: 18, name: 'Арнольд' },
    { id: 19, name: 'Моооооооо' },
    {id:20, name: 'Салах'},
  ]
};

export const getInvoices = () => {
  return Promise.resolve(db.invoices);
};

export const getInvoiceById = invoiceId => {
  return Promise.resolve(db.invoices.find(invoice => invoice.id === invoiceId));
};

export const getCustumer = () => {
  return Promise.resolve(db.customers);
};

export const getCustomerById = id => {
  return Promise.resolve(db.customers.find(customer => customer.id === id));
};