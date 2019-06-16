require "application_system_test_case"

class GrillesTest < ApplicationSystemTestCase
  setup do
    @grille = grilles(:one)
  end

  test "visiting the index" do
    visit grilles_url
    assert_selector "h1", text: "Grilles"
  end

  test "creating a Grille" do
    visit grilles_url
    click_on "New Grille"

    fill_in "Image", with: @grille.image
    fill_in "Name", with: @grille.name
    click_on "Create Grille"

    assert_text "Grille was successfully created"
    click_on "Back"
  end

  test "updating a Grille" do
    visit grilles_url
    click_on "Edit", match: :first

    fill_in "Image", with: @grille.image
    fill_in "Name", with: @grille.name
    click_on "Update Grille"

    assert_text "Grille was successfully updated"
    click_on "Back"
  end

  test "destroying a Grille" do
    visit grilles_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Grille was successfully destroyed"
  end
end
