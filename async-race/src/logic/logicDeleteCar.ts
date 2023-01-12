import { deleteCarAPi, deleteWinnerApi, getWinnerCarAPi, getWinnersApi } from '../api/api';
import { renderContainerCARS, renderContainerResultWin } from '../create/render';


// Логика удаления машины из гаража
export async function deleteCarFromGarge(id: string) {
  await deleteCarAPi(id);
  await renderContainerCARS();
}
  
// Логика удаления машины из победителей
export async function deleteCarFromWinners(id: string) { 
  const winners = await getWinnersApi();
  const key: boolean = winners.winnersCarsArray.some((car) => car.id === +id);
  console.log('key', key);
  if (key) {
    await deleteWinnerApi(id);
  }
  await renderContainerResultWin();
}

