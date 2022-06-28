import { Button, Table } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../../../shared/components/ConfirmModal/ConfirmModal";
import {
  Entity,
  FoodItemEntityFragment,
  FoodItemEntityMenuParent,
  MenuEntityFragment,
  NewMenuInfo,
  SectionEntityFragment,
} from "../../../../shared/graphql/Admin/types";
import { convertTime } from "../../../../shared/utils/convertTime";
import {
  useDeleteItem,
  useDeleteMenu,
  useDeleteSection,
  useEditItem,
} from "../../hooks/useUpdateEntity";
import {
  DesktopView,
  MenuTableBody,
  MenuTableD,
  MenuTableHeading,
  MenuTableR,
} from "../Styles";

export type ParentData =
  | MenuEntityFragment
  | SectionEntityFragment
  | FoodItemEntityFragment;

const TableBoilerplate = ({ headings }: { headings: string[] }) => {
  return (
    <thead>
      <tr>
        {headings.map((heading) => {
          return <MenuTableHeading key={heading}>{heading}</MenuTableHeading>;
        })}
      </tr>
    </thead>
  );
};

const TableEntityHeadings: { [key in Entity]: string[] } = {
  menu: ["S/N", "Name", "Last Updated", "Actions"],
  section: ["Code", "Name", "No. of Items", "Actions"],
  item: ["Code", "Name", "Price", "Actions"],
};

export const MenuTable = ({
  newMenus,
  refetch,
}: {
  newMenus: NewMenuInfo[];
  refetch: () => any;
}) => {
  const navigate = useNavigate();
  const menuDeleter = useDeleteMenu();
  if (!newMenus) return <></>;
  return (
    <DesktopView>
      <Table
        striped
        verticalSpacing="xl"
        fontSize="lg"
        style={{ width: "100%" }}
      >
        <TableBoilerplate headings={TableEntityHeadings["menu"]} />
        <MenuTableBody>
          {newMenus.map((menu) => {
            return (
              <MenuTableR
                key={menu.id}
                onClick={() => navigate(`/admin/menus/${menu.id}`)}
              >
                <MenuTableD>{menu.id}</MenuTableD>
                <MenuTableD>{menu.title}</MenuTableD>
                <MenuTableD>{convertTime(menu.updatedat, true)}</MenuTableD>
                <MenuTableD onClick={(e) => e.stopPropagation()}>
                  <DeleteModal
                    onConfirm={async () => {
                      await menuDeleter(menu.id);
                      refetch();
                    }}
                    confirmMessage={`Delete menu titled ${menu.title} and all components inside?`}
                    renderLink={(modal) => (
                      <Button onClick={() => modal.open()}>Delete Menu</Button>
                    )}
                  />
                </MenuTableD>
              </MenuTableR>
            );
          })}
        </MenuTableBody>
      </Table>
    </DesktopView>
  );
};

interface SectionTableProps {
  sections: SectionEntityFragment[];
  parent: Entity;
  parentData: ParentData;
  refetch: () => void;
}

export const SectionTable = ({
  sections,
  parent,
  parentData,
  refetch,
}: SectionTableProps) => {
  const navigate = useNavigate();
  const sectionDeleter = useDeleteSection();
  const itemEditer = useEditItem();
  return (
    <>
      <DesktopView>
        <Table
          striped
          verticalSpacing="md"
          fontSize="lg"
          style={{ width: "100%" }}
        >
          <TableBoilerplate headings={TableEntityHeadings["section"]} />
          <MenuTableBody>
            {sections.map((section) => {
              return (
                <MenuTableR
                  key={section.id}
                  onClick={() => navigate(`/admin/sections/${section.id}`)}
                >
                  <MenuTableD>{section.code}</MenuTableD>
                  <MenuTableD>{section.title}</MenuTableD>
                  <MenuTableD>{section.fooditems.length}</MenuTableD>
                  <MenuTableD onClick={(e) => e.stopPropagation()}>
                    {parent === "menu" && (
                      <>
                        <DeleteModal
                          onConfirm={async () => {
                            await sectionDeleter(section);
                            refetch();
                          }}
                          confirmMessage={`Delete section titled ${section.title} from menu ${parentData.title}?`}
                          renderLink={(modal) => (
                            <Button onClick={() => modal.open()}>
                              Delete from Menu
                            </Button>
                          )}
                        />
                      </>
                    )}
                    {parent === "item" && (
                      <>
                        <DeleteModal
                          onConfirm={async () => {
                            await itemEditer(parentData, section);
                            refetch();
                          }}
                          confirmMessage={`Delete item titled ${parentData.title} from section ${section.title}?`}
                          renderLink={(modal) => (
                            <Button onClick={() => modal.open()}>
                              Delete from Section
                            </Button>
                          )}
                        />
                      </>
                    )}
                  </MenuTableD>
                </MenuTableR>
              );
            })}
          </MenuTableBody>
        </Table>
      </DesktopView>
    </>
  );
};
interface FoodItemTableProps {
  foodItems: FoodItemEntityMenuParent[];
  parent: Entity;
  parentData: ParentData;
  refetch: () => void;
}
export const FoodItemTable = ({
  foodItems,
  parent,
  parentData,
  refetch,
}: FoodItemTableProps) => {
  const navigate = useNavigate();
  const itemEditer = useEditItem();
  const itemDeleter = useDeleteItem();

  return (
    <DesktopView>
      <Table
        striped
        verticalSpacing="md"
        fontSize="lg"
        style={{ width: "100%" }}
      >
        <TableBoilerplate headings={TableEntityHeadings["item"]} />
        <MenuTableBody>
          {foodItems.map((item) => {
            return (
              <MenuTableR
                key={item.id}
                onClick={() => navigate(`/admin/fooditems/${item.id}`)}
              >
                <MenuTableD>{item.code}</MenuTableD>
                <MenuTableD>{item.title}</MenuTableD>
                <MenuTableD>
                  ${parseFloat(item.price.toString()).toFixed(2)}
                </MenuTableD>
                <MenuTableD onClick={(e) => e.stopPropagation()}>
                  {parent === "section" && (
                    <>
                      <DeleteModal
                        onConfirm={async () => {
                          await itemEditer(item, parentData);
                          refetch();
                        }}
                        confirmMessage={`Delete item titled ${item.title} from section ${parentData.title}?`}
                        renderLink={(modal) => (
                          <Button onClick={() => modal.open()}>
                            Delete from Section
                          </Button>
                        )}
                      />
                    </>
                  )}
                  {parent === "menu" && (
                    <>
                      <DeleteModal
                        onConfirm={async () => {
                          await itemDeleter(item);
                          refetch();
                        }}
                        confirmMessage={`Delete item titled ${item.title} from menu ${parentData.title}?`}
                        renderLink={(modal) => (
                          <Button onClick={() => modal.open()}>
                            Delete from Menu
                          </Button>
                        )}
                      />
                    </>
                  )}
                </MenuTableD>
              </MenuTableR>
            );
          })}
        </MenuTableBody>
      </Table>
    </DesktopView>
  );
};
