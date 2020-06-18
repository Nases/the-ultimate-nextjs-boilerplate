import ButtonFlat from '../../form/partials/ButtonFlat'
import Button from '../../form/partials/Button'


const Password = () => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg uppercase leading-6 font-medium text-gray-900">
              Password
            </h3>
          </div>
          <div class="ml-4 mt-2 flex-shrink-0">
            <ButtonFlat>
              <i class="fas fa-edit"></i>
                Update
            </ButtonFlat>
          </div>
        </div>
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  )
}

export default Password