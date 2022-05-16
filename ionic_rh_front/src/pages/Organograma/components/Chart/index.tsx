import data from './data.json';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from '@emotion/styled';

import * as S from './styles';

const Card = (props: { data: any[] }) => {
  const StyledNode = styled.div`
    padding: 5px;
    border-radius: 100%;
    display: inline-block;
  `;
  const StyledCard = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    display: inline-block;
    border: 1px solid black;
    border-radius: 8px;
    position: relative;
    background: #2fb4d8b8;
    box-shadow: -2px 2px 10px 3px rgba(0, 0, 0, 0.1);
    width: 200px;
  `;
  return (
    <S.Container>
      <Tree
        label={
          <StyledCard>
            <StyledNode>
              <div className="fotosPerfil">
                <img
                  src="https://raw.githubusercontent.com/excalibur-coders/IONICRH/master/docs/readme/equipe/tais.jpg"
                  alt=""
                />
              </div>
            </StyledNode>
            <div>
              <b>
                <h1>Tais</h1>
              </b>
              <h2>Dev</h2>
            </div>
          </StyledCard>
        }
      >
        <TreeNode
          label={
            <StyledCard>
              <StyledNode>
                <div className="fotosPerfil">
                  <img
                    src="https://raw.githubusercontent.com/excalibur-coders/IONICRH/master/docs/readme/equipe/gabriel.jpg"
                    alt=""
                  />
                </div>
              </StyledNode>
              <div>
                <b>
                  <h1>Gabriel</h1>
                </b>
                <h2>Dev</h2>
              </div>
            </StyledCard>
          }
        >
          <TreeNode
            label={
              <StyledCard>
                <StyledNode>
                  <div className="fotosPerfil">
                    <img
                      src="https://raw.githubusercontent.com/excalibur-coders/IONICRH/master/docs/readme/equipe/vinicius.jpg"
                      alt=""
                    />
                  </div>
                </StyledNode>
                <div>
                  <b>
                    <h1>Vinícius</h1>
                  </b>
                  <h2>Dev</h2>
                </div>
              </StyledCard>
            }
          />
          <TreeNode
            label={
              <StyledCard>
                <StyledNode>
                  <div className="fotosPerfil">
                    <img
                      src="https://avatars.githubusercontent.com/u/68930336?v=4"
                      alt=""
                    />
                  </div>
                </StyledNode>
                <div>
                  <b>
                    <h1>Lucas C</h1>
                  </b>
                  <h2>Dev</h2>
                </div>
              </StyledCard>
            }
          />
        </TreeNode>
        <TreeNode
          label={
            <StyledCard>
              <StyledNode>
                <div className="fotosPerfil">
                  <img
                    src="https://raw.githubusercontent.com/excalibur-coders/IONICRH/master/docs/readme/equipe/lucasbd.jpg"
                    alt=""
                  />
                </div>
              </StyledNode>
              <div>
                <b>
                  <h1>Lucas BD</h1>
                </b>
                <h2>Master</h2>
              </div>
            </StyledCard>
          }
        >
          <TreeNode
            label={
              <StyledCard>
                <StyledNode>
                  <div className="fotosPerfil">
                    <img
                      src="https://raw.githubusercontent.com/excalibur-coders/IONICRH/master/docs/readme/equipe/rafael.jpg"
                      alt=""
                    />
                  </div>
                </StyledNode>
                <div>
                  <b>
                    <h1>Rafa</h1>
                  </b>
                  <h2>Dev</h2>
                </div>
              </StyledCard>
            }
          />
        </TreeNode>
        <TreeNode
          label={
            <StyledCard>
              <StyledNode>
                <div className="fotosPerfil">
                  <img
                    src="https://raw.githubusercontent.com/excalibur-coders/IONICRH/master/docs/readme/equipe/priscila.jpg"
                    alt=""
                  />
                </div>
              </StyledNode>
              <div>
                <b>
                  <h1>Priscila</h1>
                </b>
                <h2>P.O</h2>
              </div>
            </StyledCard>
          }
        >
          <TreeNode
            label={
              <StyledCard>
                <StyledNode>
                  <div className="fotosPerfil">
                    <img
                      src="https://avatars.githubusercontent.com/u/68930336?v=4"
                      alt=""
                    />
                  </div>
                </StyledNode>
                <div>
                  <b>
                    <h1>Lucas C</h1>
                  </b>
                  <h2>Dev</h2>
                </div>
              </StyledCard>
            }
          />
        </TreeNode>
        <TreeNode
          label={
            <StyledCard>
              <StyledNode>
                <div className="fotosPerfil">
                  <img
                    src="https://avatars.githubusercontent.com/u/68930336?v=4"
                    alt=""
                  />
                </div>
              </StyledNode>
              <div>
                <b>
                  <h1>Flamenguista</h1>
                </b>
                <h2>Dev</h2>
              </div>
            </StyledCard>
          }
        >
          <TreeNode
            label={
              <StyledCard>
                <StyledNode>
                  <div className="fotosPerfil">
                    <img
                      src="https://raw.githubusercontent.com/excalibur-coders/IONICRH/master/docs/readme/equipe/kevin.jpg"
                      alt=""
                    />
                  </div>
                </StyledNode>
                <div>
                  <b>
                    <h1>Kevin</h1>
                  </b>
                  <h2>Dev</h2>
                </div>
              </StyledCard>
            }
          />
        </TreeNode>
      </Tree>
    </S.Container>
  );
};

const Chart = () => {
  return (
    <div className="org-tree">
      <Card data={data} />
    </div>
  );
};

export default Chart;
