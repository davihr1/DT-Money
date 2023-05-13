import { SearchFromContainer } from "./styles";
import {MagnifyingGlass} from '@phosphor-icons/react'
export function SearchForm() {
  return (
    <SearchFromContainer>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFromContainer>
  )
}