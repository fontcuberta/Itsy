class SiteController < ApplicationController
  def home
      @prices_array = []
      @dates_array = []
      @availability_array = []
      in_date = Time.now
      out_date = in_date + 3.day
      to = Time.new(2016, 1, 1)
      while in_date < to
  		  @page = MetaInspector.new("http://booking.princess-hotels.com/desk/nReservations/jsp/C_Rates.jsp?idPartner=PRINCESS&lang=es&inDay="+in_date.day.to_s+"&inMonth="+in_date.month.to_s+"&inYear=2015&outDay="+out_date.day.to_s+"&outMonth="+out_date.month.to_s+"&outYear=2015&hotelCode=7241444&zone=81167&idPrm=MBPRINCESS&idONg=V28&idNom=webpropia&rooms=1&adultsRoom1=4&childrenRoom1=2&child1Room1=10&child2Room1=10&userCurrency=&fromSearchAvailability=N").to_s
        @dates_array << in_date
        if @page.scan( /< parseFloat([^>]*)\) &&/).any?
          @prices_array << @page.scan( /< parseFloat([^>]*)\) &&/).first
          @availability_array << "Yes"
        else
          @availability_array << "No"
        end
        in_date += 1.day
        out_date += 1.day
      end
  	render 'home'
  end
end
