class GrillesController < ApplicationController
  before_action :set_grille, only: [:show, :edit, :update, :destroy]

  # GET /grilles
  # GET /grilles.json
  def index
    @grilles = Grille.all
  end

  # GET /grilles/1
  # GET /grilles/1.json
  def show
  end

  # GET /grilles/new
  def new
    @grille = Grille.new
  end

  # GET /grilles/1/edit
  def edit
  end

  # POST /grilles
  # POST /grilles.json
  def create
    @grille = Grille.new(grille_params)

    respond_to do |format|
      if @grille.save
        format.html { redirect_to @grille, notice: 'Grille was successfully created.' }
        format.json { render :show, status: :created, location: @grille }
      else
        format.html { render :new }
        format.json { render json: @grille.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /grilles/1
  # PATCH/PUT /grilles/1.json
  def update
    respond_to do |format|
      if @grille.update(grille_params)
        format.html { redirect_to @grille, notice: 'Grille was successfully updated.' }
        format.json { render :show, status: :ok, location: @grille }
      else
        format.html { render :edit }
        format.json { render json: @grille.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /grilles/1
  # DELETE /grilles/1.json
  def destroy
    @grille.destroy
    respond_to do |format|
      format.html { redirect_to grilles_url, notice: 'Grille was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_grille
      @grille = Grille.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def grille_params
      params.require(:grille).permit(:name, :image)
    end
end
