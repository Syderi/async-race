import { buttonResultsPaginationPrev, buttonResultsPaginationNext } from '../create/createSectionResults';
import { GLOBAL_STATE, MAX_WINNERS_CARS_IN_PAGE } from '../constants/constants';
import { renderContainerResultWin } from '../create/render';
import { getWinnersApi } from '../api/api';

// функция проверки активации кнопок переключения страниц

export async function checkbuttonWinnerPagination(numberOfPage: number = GLOBAL_STATE.countOfPageWinners) {
  if (numberOfPage <= 1) {
    buttonResultsPaginationPrev.disabled = true;
  } else {
    buttonResultsPaginationPrev.disabled = false;
  }
  const maxCars = await getWinnersApi();
  GLOBAL_STATE.countCarsInGarageWinners = +maxCars.countWinnerCars;
  const maxPage = Math.ceil(GLOBAL_STATE.countCarsInGarageWinners / MAX_WINNERS_CARS_IN_PAGE);
  // console.log('maxPage', maxPage);
  if (GLOBAL_STATE.countOfPageWinners >= maxPage) {
    buttonResultsPaginationNext.disabled = true;
  } else {
    buttonResultsPaginationNext.disabled = false;
  }
}

checkbuttonWinnerPagination();

async function undateCarsPageWinners() {
  await renderContainerResultWin();
  checkbuttonWinnerPagination();
}

// слушатель на кнопке следующей страницы
buttonResultsPaginationNext.addEventListener('click', () => {
  GLOBAL_STATE.countOfPageWinners += 1;
  console.log('next');
  undateCarsPageWinners();
});

// слушатель на кнопке предыдущей страницы
buttonResultsPaginationPrev.addEventListener('click', () => {
  GLOBAL_STATE.countOfPageWinners -= 1;
  console.log('prev');
  undateCarsPageWinners();
});


