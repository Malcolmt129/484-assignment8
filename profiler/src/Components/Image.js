import data from '../index';

export default function Image () {
    return (
        <div class="image">
            <img src={data.imgURL} alt="Malcolm Thompson" width="500" height="500"/>
        </div>
    );
}
