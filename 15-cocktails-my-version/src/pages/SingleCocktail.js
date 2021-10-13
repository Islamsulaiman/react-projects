import React, { useState, useEffect, useCallback } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  let [loading, setLoading] = useState(true);
  let [data, setData] = useState([]);
  let { id } = useParams();

  console.log(data);

  let fetchData = useCallback(async () => {
    try {
      let res = await fetch(`${url}${id}`);
      let resJson = await res.json();
      let { drinks } = resJson;
      console.log(drinks);
      if (drinks) {
        const newArray = drinks.map((drink) => {
          let {
            idDrink,
            strDrink,
            strAlcoholic,
            strGlass,
            strDrinkThumb,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drink;
          let ingredient = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          return {
            id: idDrink,
            name: strDrink,
            alcohol: strAlcoholic,
            glass: strGlass,
            img: strDrinkThumb,
            ingredient,
          };
        });
        setData(newArray);
      } else {
        setData([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setData([]);
      setLoading(false);
    }
  }, [url, id]);

  useEffect(() => {
    fetchData();
  }, [id, fetchData]);

  return (
    <main>
      {data.length < 1
        ? "No match"
        : data.map((item) => {
            let { id, name, img, alcohol, glass, ingredient } = item;
            const width = { width: "400px", marginLift: "50px" };
            const color = { backgroundColor: "green", color: "white" };
            return (
              <React.Fragment key={id}>
                <Link to='/' className='btn'>
                  Back Home
                </Link>
                <h3>{name}</h3>
                <div>
                  <section>
                    <img style={width} src={img} alt={name} />
                  </section>
                  <section>
                    <p>
                      <span style={color}>Name :</span> {name}
                    </p>
                    <p>
                      <span style={color}>Alcohol :</span> {alcohol}
                    </p>
                    <p>
                      <span style={color}>Glass :</span> {glass}
                    </p>
                    <p>
                      <span style={color}>Ingredient :</span>
                      {ingredient.map((item) => {
                        return item ? (
                          <span style={{ margin: "10px" }} key={id++}>
                            {item}
                          </span>
                        ) : null;
                      })}
                    </p>
                  </section>
                </div>
              </React.Fragment>
            );
          })}
    </main>
  );
};

export default SingleCocktail;
