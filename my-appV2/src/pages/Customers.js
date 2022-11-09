import { getCustumer } from '../fakeApi'
import { SearchBox } from '../components/SearchBox'
import { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from "react-router-dom"

export const Customers = () => {

  const [customers, setCustomers] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const filterParam  = searchParams.get('filter') ?? '';

  useEffect(() => {
    getCustumer().then(setCustomers)
  }, [])
  
  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {})
  }

  const visibleCustomers = useMemo(() => {
    return customers.filter(customer =>
      customer.name.toLowerCase().includes(filterParam.toLowerCase())
    );
  }, [customers, filterParam]);

  return (
    <main> 
      <SearchBox value={filterParam} onChange={changeFilter} />
      {visibleCustomers.length > 0 && (
        <ul>
          {visibleCustomers.map(customer => (
            <li key={customer.id}>
              <Link to={`${customer.id}`}>{customer.name}</Link>
            </li>
          ))}
        </ul>
      )}

    </main>
  )
}