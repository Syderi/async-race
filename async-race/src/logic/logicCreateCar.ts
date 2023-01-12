import { inputNameCreate, inputColorCreate, buttonCreate } from '../create/createSectionRace';
import { сreateCarAPi } from '../api/api';
import { renderContainerCARS } from '../create/render';
import { checkbuttonRacePagination } from './LogicPaginationRace';

// Логика добавления машины в гараж
async function createCar(
  name: string = inputNameCreate.value,
  color: string = inputColorCreate.value,
) {
  await сreateCarAPi({
    name: name || 'unknown',
    color: color,
  });
  await renderContainerCARS();
  checkbuttonRacePagination();
}

buttonCreate.addEventListener('click', () => {
  createCar();
});
