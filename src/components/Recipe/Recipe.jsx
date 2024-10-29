import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    const {strCategory, strCategoryThumb} = recipe;
    return (
        <div className="card bg-base-100 pt-6 border mt-[50px]">
      <figure className="">
        <img
          className="h-[182px] lg:h-[220px] rounded-[16px]"
          src={strCategoryThumb}
          alt="Recipe image"
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="text-[22px] font-semibold">{strCategory}</h2>
        <p className='pb-5 text-[18px]'>
        Delicious and fresh flavors from around the world, crafted to satisfy every craving.
        </p>
        <hr />
        <div className="card-actions mt-6">
          <button
            className="px-6 py-[13px] bg-[#0BE58A] text-[18px] font-semibold rounded-[10px]"
          >
            Details
          </button>
        </div>
      </div>
    </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object
}

export default Recipe;