import grid from 'src/styles/modules/grid.module.scss';
import titles from 'src/styles/modules/titles.module.scss';
import paragraphs from 'src/styles/modules/paragraphs.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import phones from '../../styles/modules/page.module.scss';
import ProductList from '@/components/ProductList/ProductList';
import getData from '@/utils/getData';
import Dropdown from '@/components/Dropdown/Dropdown';
import { sortOptions, limitOptions, optionsType } from '@/utils/constants';
import getSortedData from '@/utils/getSortedData';

export default async function Phones({ searchParams } : { searchParams: any}) {
  const sort = searchParams.sort || 'age';
  const limit = searchParams.limit || '8';

  const data = await getSortedData('phones', sort, limit);

  return (
    <div className={grid.template}>
      <BreadCrumbs category={'phones'} />
      <h1 className={titles.main}>Mobile phones</h1>
      <p className={phones.title_sub}>{data.count} Models</p>

      <div className={phones.sort}>
        <p className={paragraphs.parameter}>Sort by</p>

        <Dropdown
          options={sortOptions}
          optionsType={optionsType.sort}
        />
      </div>

      <div className={phones.pagination}>
        <p className={paragraphs.parameter}>Items on page</p>

        <Dropdown
          options={limitOptions}
          optionsType={optionsType.limit}
        />
      </div>

      <ProductList products={data.products} />
    </div>
  );
}
